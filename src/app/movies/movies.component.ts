import { LoadingService } from './../shared/services/loading.service';
import { Movie } from './../models/Movie';
import { MovieService } from './movie.service';
import { Component, OnInit } from '@angular/core';
import {  Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Observable<Movie[]>;

  constructor(private movieService: MovieService,
    private spinner: LoadingService) {
    this.movies= new Observable<Movie[]>();
  }

  ngOnInit(): void {
    this.spinner.show();
    this.onRefresh();
    console.log(this.movies)
    this.spinner.hide();
  }

  onRefresh(){
   this.movies= this.movieService.getAll().pipe(
     catchError((error: any) => {
       console.log(error);
       return of();
     })
   );
  }

}
