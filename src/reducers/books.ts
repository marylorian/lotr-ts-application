import { Reducer } from 'redux'
import { IBook, IBookChapter } from '../typings/books'

export interface IBooksState {
  list: IBook[]
  total: number
  page: number
}

export const UPDATE_BOOKS_LIST_STATE = 'UPDATE_BOOKS_LIST_STATE'
interface UpdateListStateAction {
  type: typeof UPDATE_BOOKS_LIST_STATE
  payload: { list: IBook[]; total: number }
}

export const UPDATE_BOOK_CHAPTERS_STATE = 'UPDATE_BOOK_CHAPTERS_STATE'
interface UpdateBookChaptersState {
  type: typeof UPDATE_BOOK_CHAPTERS_STATE
  payload: { bookId: string; chapters: IBookChapter[] }
}

export const RESET_BOOKS_LIST_STATE = 'RESET_BOOKS_LIST_STATE'
interface ResetListStateAction {
  type: typeof RESET_BOOKS_LIST_STATE
}

const initialState: IBooksState = {
  list: [],
  total: 0,
  page: 0,
}

const reducer: Reducer<
  IBooksState,
  UpdateListStateAction | UpdateBookChaptersState | ResetListStateAction
> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BOOKS_LIST_STATE: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case UPDATE_BOOK_CHAPTERS_STATE: {
      return {
        ...state,
        list: state.list.map((book) => {
          if (book.id === action.payload.bookId) {
            return { ...book, chapters: action.payload.chapters }
          }
          return book
        }),
      }
    }
    case RESET_BOOKS_LIST_STATE:
      return initialState
    default:
      return state
  }
}

export default reducer
