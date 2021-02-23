import { UPDATE_BOOK_CHAPTERS_STATE } from '../reducers/books'
import { BooksMapper } from '../mappers/books'

export const fetchBookChaptersByBookId = ({ bookId }: { bookId: string }) => {
  return async (dispatch, _, { ApiService, ExceptionService }) => {
    try {
      const {
        data: { docs: list },
      } = await ApiService.get(`/book/${bookId}/chapter`)
      const chapters = list.map(BooksMapper.mapChapterItem)

      dispatch({
        type: UPDATE_BOOK_CHAPTERS_STATE,
        payload: { bookId, chapters },
      })

      return { bookId, chapters }
    } catch (error) {
      ExceptionService.showException({
        error,
        message: 'Load of book chapters was not successfull, please try again',
      })
    }
  }
}
