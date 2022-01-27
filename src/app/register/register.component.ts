import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserViewModel } from '../models/createUserViewModel';
import { LoadingService } from '../shared/services/loading.service';
import { LoginService } from '../shared/services/login.service';
import { ToastService } from '../shared/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  createForm: FormGroup;

  createUserViewModel: CreateUserViewModel= {
    username: '',
    password: '',
    role: ''
  }

  roles: string[]= [
    'Administrador',
    'Editor',
    'Usuario'
  ]

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private toast: ToastService,
    private spinner: LoadingService) {
    this.spinner.show();
    this.createForm= this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
    this.spinner.hide();
  }


  create(){
    this.checkPasswordConfirm();
    if(!this.createForm.invalid){
      this.spinner.show();
      this.createUserViewModel.username= this.createForm.value.username;
      this.createUserViewModel.password= this.createForm.value.password;
      this.createUserViewModel.role= this.createForm.value.role;
      this.loginService.create(this.createUserViewModel).subscribe({
        next: response => {
          console.log(response);
        },
        error: error => {
          this.toast.showError(error.message)
          this.spinner.hide();
        },
        complete: () => {
          this.toast.showSuccess("Usuário cadastrado com sucesso!")
          this.spinner.hide();
        }
      })

    }
  }


  checkPasswordConfirm(){
    const flag= this.createForm.get('password')?.value !== this.createForm.get('confirmPassword')?.value;
    if(flag){
      this.createForm.get('confirmPassword')?.setErrors({different: true});
    }
  }

}
