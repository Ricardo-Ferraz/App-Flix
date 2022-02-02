import { ToastService } from './../../shared/services/toast.service';
import { LoadingService } from './../../shared/services/loading.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from '../movie.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MovieModalComponent } from './modal/movie-modal/movie-modal.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy{

  inscricao?: Subscription;

  movie: Movie= {
    id: -1,
    title: '',
    director: '',
    age: -1,
    rating: -1,
    description: '',
    cast: '',
    duration: '',
    urlImagem: '',
    movieCategories: []
  };

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private spinner: LoadingService,
    private toastr: ToastService,
    private dialog: MatDialog) { this.openDialog(); }


    openDialog(): void {
      this.spinner.show()
    this.inscricao= this.route.params.subscribe((params: any) => {
      var id= params['id'];
      this.movieService.getById(id).subscribe({
        next: (response) => {
         this.movie= response;
         const dialogRef = this.dialog.open(MovieModalComponent, {
          width: '250px',
          data: response
        });
        dialogRef.afterClosed().subscribe(result => {});
        },
        error: () => {
          this.toastr.showError("Erro ao mostrar filme selecionado!")
          this.spinner.hide();
        },
        complete: () => {
          this.spinner.hide();

        }
      })
    });
    }


  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.spinner.show()
    this.inscricao= this.route.params.subscribe((params: any) => {
      var id= params['id'];
      this.movieService.getById(id).subscribe({
        next: (response) => {
         this.movie= response;
        },
        error: () => {
          this.toastr.showError("Erro ao mostrar filme selecionado!")
          this.spinner.hide();
        },
        complete: () => {
          this.spinner.hide();
        }
      })
    });
  }

  ngOnDestroy(): void {
    this.inscricao?.unsubscribe();
  }

}

