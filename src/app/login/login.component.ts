import { User } from './../models/Usuario';
import { LoginUserViewModel } from './../models/LoginUserViewModel';
import { LoginService } from '../shared/services/login.service';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastService } from './../shared/services/toast.service';
import { LoadingService } from './../shared/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  loginUserViewModel: LoginUserViewModel = {
    Username: '',
    Password: ''
  }

  user: User= {
    Id: -1,
    Username: '',
    Password: '',
    Role: '',
    Registration: '',
    UserMovies: []
  }


  constructor(private formBuilder: FormBuilder,
    private localStorage: LocalStorageService,
    private loginService: LoginService,
    private router: Router,
    private toast: ToastService,
    private spinner: LoadingService) {
    this.loginForm= this.formBuilder.group({
      username:['', [Validators.required]],
      password:['', [Validators.required, Validators.minLength(3)]]
    });
   }

  ngOnInit(): void {
  }

  login(){
    if(!this.loginForm.invalid){
      this.spinner.show();
      this.loginUserViewModel.Username= this.loginForm.value.username;
      this.loginUserViewModel.Password= this.loginForm.value.password;
      this.loginService.login(this.loginUserViewModel).subscribe({
        next: (response: any) => {
          this.user.Id= response.id;
          this.user.Username= response.username;
          this.user.Role= response.role;
          this.user.UserMovies= response.userMovies;
          this.user.Token= response.token;
          this.user.Registration= response.registration;
          this.localStorage.setUser(this.user);
        },
        error: error => {
          this.toast.showError(error.message)
          this.spinner.hide();
        },
        complete: () => {
          this.spinner.hide();
          this.toast.showSuccess("Login completo!")
          this.router.navigate([''])
        }
      });
    }
  }

}

