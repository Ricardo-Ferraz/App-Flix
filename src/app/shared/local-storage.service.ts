import { Injectable } from '@angular/core';

import { User } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setUser(user: User){
    if(user){
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }

  getUser(){
    return window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user') as string) as User : undefined
  }
}
