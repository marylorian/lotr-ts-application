import { Selector } from 'react-redux'
import { IBook } from '../typings/books'
import { IBooksState } from '../reducers/books'

export const selectBooksState: Selector<IAppState, IBooksState> = (state) =>
  state.books

export const selectBooksList: Selector<IAppState, IBook[]> = (state) =>
  state.books.list
