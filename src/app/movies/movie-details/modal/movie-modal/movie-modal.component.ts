import { MovieService } from './../../../movie.service';
import { MovieAux } from './../../../../models/MovieAux';
import { Movie } from './../../../../models/Movie';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})
export class MovieModalComponent implements OnInit {

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

  constructor(private dialogRef: MatDialogRef<MovieModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService
    ) {
      console.log(this.data)
    }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['filmes']);
  }

  ngOnInit(): void {

  }

  click(){
    console.log(this.data);
  }

}
