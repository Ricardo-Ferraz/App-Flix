import { AdmGuard } from './guards/adm.guard';
import { MyListComponent } from './my-list/my-list.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './register/register.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path: "cadastro", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "filmes", component: MoviesComponent, canActivate: [LoginGuard], children: [
    {path: ":id", component: MovieDetailsComponent}
  ]},
  {path: "lista", component: MyListComponent, canActivate: [LoginGuard]},
  {path: "usuarios", component: UsersComponent, canActivate: [LoginGuard, AdmGuard]},
  {path: '', component: HomeComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
