import { User } from './../models/Usuario';
import { LoginUserViewModel } from './../models/LoginUserViewModel';
import { LoginService } from './../shared/login.service';
import { LocalStorageService } from './../shared/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router) {
    this.loginForm= this.formBuilder.group({
      username:['', [Validators.required]],
      password:['', [Validators.required, Validators.minLength(3)]]
    });
   }

  ngOnInit(): void {
  }

  login(){
    if(!this.loginForm.invalid){
      this.loginUserViewModel.Username= this.loginForm.value.username;
      this.loginUserViewModel.Password= this.loginForm.value.password;
      this.loginService.login(this.loginUserViewModel).subscribe({
        next: (response: any) => {
          console.log(response);
          this.user.Id= response.id;
          this.user.Username= response.username;
          this.user.Role= response.role;
          this.user.UserMovies= response.userMovies;
          this.user.Token= response.token;
          this.user.Registration= response.registration;
          this.localStorage.setUser(this.user);
        },
        error: error => {
          console.log(error)
        },
        complete: () => {
          this.router.navigate([''])
        }
      });
    }

  }

}
function next(next: any, arg1: (response: any) => void) {
  throw new Error('Function not implemented.');
}

