import { BooksMapper } from '../mappers/books'
import { UPDATE_BOOKS_LIST_STATE } from '../reducers/books'

export const fetchBooksList = (params?: { limit?: number; page?: number }) => {
  return async (dispatch, _, { ApiService, ExceptionService }) => {
    try {
      const { limit = 5, page = 0 } = params || {}
      const {
        data: { docs: list, total },
      } = await ApiService.get('/book', {
        params: { limit, offset: page * limit },
      })
      const mappedData = list.map(BooksMapper.mapBookItem)

      dispatch({
        type: UPDATE_BOOKS_LIST_STATE,
        payload: { list: mappedData, total },
      })

      return { list: mappedData, total }
    } catch (error) {
      ExceptionService.showException({
        error,
        message: 'Load of books was not successfull, please try again',
      })
    }
  }
}
