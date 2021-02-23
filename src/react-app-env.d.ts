/// <reference types="react-scripts" />
declare interface IAppState {
  movies: import('./reducers/movies').IMoviesState
  books: import('./reducers/books').IBooksState
}
