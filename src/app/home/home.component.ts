import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { catchError, Observable, of } from 'rxjs';
import { Movie } from '../models/Movie';
import { MovieService } from '../movies/movie.service';
import { LoadingService } from '../shared/services/loading.service';
import { ToastService } from '../shared/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  movies: Observable<Movie[]>;
  isFirstAtri: boolean= true;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private spinner: LoadingService,
    private dialog: MatDialog) { this.movies= new Observable<Movie[]>(); }

  ngOnInit(): void {
    this.spinner.show();

    this.onRefresh();

    this.spinner.hide();
  }

  onRefresh(){
    this.spinner.show();
    this.movies= this.movieService.getAll().pipe(
       catchError((error: any) => {
         this.spinner.hide();
         console.log(error);
         return of();
      }),
      );
    }


}
