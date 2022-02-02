import { Subscription } from 'rxjs';
import { Movie } from './Movie';
export interface MovieAux{
  movie: Movie,
  inscricao: Subscription
}
