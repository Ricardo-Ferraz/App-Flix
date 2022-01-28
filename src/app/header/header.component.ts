import { Router } from '@angular/router';
import { User } from './../models/Usuario';
import { LocalStorageService } from './../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string= 'AppFlix';
  user: User | undefined;
  itens: string[]= [];


  constructor(private localStorageService: LocalStorageService,
    private router: Router) {
}
  ngOnInit(): void {
    this.user= this.localStorageService.getUser();
    console.log("init")
    this.navbar();
  }

  navbar(){
    this.itens= [];
    if(this.user?.Role === 'Usuario' || this.user?.Role === 'Editor'){
      this.itens.push('filmes');
      this.itens.push('lista');
    }
    else if(this.user?.Role === 'Administrador'){
      this.itens.push('filmes');
      this.itens.push('lista');
      this.itens.push('usuarios');
    }
  }

  logOut(){
    this.localStorageService.disableUser();
    this.user= undefined;

    this.router.navigate(['', 'login'])
  }

}


