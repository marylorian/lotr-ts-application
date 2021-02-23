import { AnyAction, combineReducers } from 'redux'
import moviesReducer from './movies'
import booksReducer from './books'

const rootReducer = () =>
  combineReducers<IAppState, AnyAction>({
    movies: moviesReducer,
    books: booksReducer,
  })

export default rootReducer()
