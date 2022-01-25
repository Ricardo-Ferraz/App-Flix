import { Category } from "./Category";

export interface Movie{
  Id: number,
  Title: string,
  Director: string,
  Age: number,
  Rating: number,
  Description: string,
  Cast: string,
  Duration: string,
  MovieCategories: Category[]
}
