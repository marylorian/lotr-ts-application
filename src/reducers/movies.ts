import { Reducer } from 'redux'
import { IMovie } from '../typings/movies'

export interface IMoviesState {
  list: IMovie[]
  total: number
  page: number
}

export const UPDATE_MOVIES_LIST_STATE = 'UPDATE_MOVIES_LIST_STATE'
interface UpdateListStateAction {
  type: typeof UPDATE_MOVIES_LIST_STATE
  payload: { movies: IMovie[]; total: number }
}

export const RESET_MOVIES_LIST_STATE = 'RESET_MOVIES_LIST_STATE'
interface ResetListStateAction {
  type: typeof RESET_MOVIES_LIST_STATE
}

const initialState: IMoviesState = {
  list: [],
  total: 0,
  page: 0,
}

const reducer: Reducer<
  IMoviesState,
  UpdateListStateAction | ResetListStateAction
> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MOVIES_LIST_STATE: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case RESET_MOVIES_LIST_STATE:
      return initialState
    default:
      return state
  }
}

export default reducer
