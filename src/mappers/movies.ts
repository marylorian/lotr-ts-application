import { IMovie, TMovieFromData } from '../typings/movies'

export class MoviesMapper {
  static mapMovieItem = ({
    _id: id,
    ...movieFromData
  }: TMovieFromData): IMovie => ({
    ...movieFromData,
    id,
  })
}
