import { IMovie } from '../typings/movies'
import { Selector } from 'react-redux'
import { IMoviesState } from '../reducers/movies'

export const selectMoviesState: Selector<IAppState, IMoviesState> = (state) =>
  state.movies

export const selectMoviesList: Selector<IAppState, IMovie[]> = (state) =>
  state.movies.list
