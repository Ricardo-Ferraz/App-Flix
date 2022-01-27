import { LoginUserViewModel } from '../../models/LoginUserViewModel';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { CreateUserViewModel } from 'src/app/models/createUserViewModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  prefix: string= `${environment.apiUrl}Users`
  loginUrl: string= `${this.prefix}/Login`
  createUrl: string= `${this.prefix}/Create`

  constructor(private http: HttpClient) { }

  login(loginUserViewModel: LoginUserViewModel){
    return this.http.post(this.loginUrl, loginUserViewModel).pipe(take(1));
  }

  create(createUserViewModel: CreateUserViewModel){
    return this.http.post(this.createUrl, createUserViewModel).pipe(take(1));
  }
}
