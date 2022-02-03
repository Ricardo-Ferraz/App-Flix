import { LocalStorageService } from './../../../../shared/services/local-storage.service';
import { Movie } from './../../../../models/Movie';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

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
    private localStorageService: LocalStorageService
    ) {
      this.movie= this.data;
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

  getUser(){
    return this.localStorageService.getUser();
  }

}
