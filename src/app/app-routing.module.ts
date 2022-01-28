import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "cadastro", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "filmes", component: LoginComponent},
  {path: "lista", component: LoginComponent},
  {path: "usuarios", component: LoginComponent},
  {path: '', component: HomeComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
