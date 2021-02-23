import { UPDATE_MOVIES_LIST_STATE } from '../reducers/movies'
import { MoviesMapper } from '../mappers/movies'

export const fetchMoviesList = (params?: {
  limit?: number
  page?: number
}) => async (dispatch, _, { ApiService, ExceptionService }) => {
  try {
    const { limit = 5, page = 0 } = params || {}
    const { data } = await ApiService.get('/movie', {
      limit,
      offset: page * limit,
    })
    const { docs: list, total } = data
    const mappedMoviesList = list.map(MoviesMapper.mapMovieItem)

    dispatch({
      type: UPDATE_MOVIES_LIST_STATE,
      payload: { list: mappedMoviesList, total },
    })

    return { list: mappedMoviesList, total }
  } catch (error) {
    ExceptionService.showException({
      error,
      message: 'Load of episodes was not successfull, please try again',
    })
  }
}
