import { Movie } from './../models/Movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly prefix: string= `${environment.apiUrl}Movies/`;
  private getAllUrl: string= `${this.prefix}GetAll`;
  private getByIdUrl: string= `${this.prefix}GetById/`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.getAllUrl).pipe();
  }

  getById(id: number): Observable<Movie>{
    return this.http.get<Movie>(`${this.getByIdUrl}${id}`).pipe();
  }
}
