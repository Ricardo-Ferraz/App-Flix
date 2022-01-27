import { LoginUserViewModel } from '../../models/LoginUserViewModel';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  prefix: string= `${environment.apiUrl}Users`
  loginUrl: string= `${this.prefix}/Login`

  constructor(private http: HttpClient) { }

  login(loginUserViewModel: LoginUserViewModel){
    return this.http.post(this.loginUrl, loginUserViewModel).pipe(take(1));
  }
}
