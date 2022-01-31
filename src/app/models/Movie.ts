import { Category } from "./Category";

export interface Movie{
  id: number,
  title: string,
  director: string,
  age: number,
  rating: number,
  description: string,
  cast: string,
  duration: string,
  urlImagem: string,
  movieCategories: Category[]
}
