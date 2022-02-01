import { Movie } from './Movie';
export interface User{
  Id: Number,
  Username: string,
  Password: string,
  Role: string,
  Registration: string,
  Token?: String,
  urlImagem: string,
  UserMovies: Movie[]
}
