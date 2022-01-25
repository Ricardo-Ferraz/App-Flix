import { Movie } from './movie';
export interface User{
  Id: Number,
  Username: string,
  Password: string,
  Role: string,
  Registration: Date,
  Token?: String,
  UserMovies: Movie[]
}
