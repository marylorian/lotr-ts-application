import React from 'react'
import { List } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooksList } from '../../actions/fetchBooksList'
import { IBook } from '../../typings/books'
import { selectBooksState } from '../../selectors/books'
import { fetchBookChaptersByBookId } from '../../actions/fetchBookChaptersByBookId'
import { IBooksState } from '../../reducers/books'

const BooksList: React.FunctionComponent = (props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const { list: booksList, page, total } = useSelector<IAppState, IBooksState>(
    selectBooksState
  )

  const dispatch = useDispatch()
  const fetchData = React.useCallback(async (params = { page }) => {
    if (!booksList.length) {
      await dispatch(fetchBooksList({ page }))
    }

    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const columns = React.useMemo(() => {
    return [
      { name: 'Name', renderFunction: ({ name }: IBook) => <div>{name}</div> },
    ]
  }, [])

  const handleLoadExtendedInformation = ({ id }: IBook) => {
    const bookInstance = booksList.filter((book) => book.id === id)[0]
    const hasExtendedInfo = bookInstance?.chapters?.length

    if (hasExtendedInfo) return

    dispatch(fetchBookChaptersByBookId({ bookId: id }))
  }

  return (
    <div className="books-list">
      <List
        hasNextPage={booksList.length < total}
        page={page}
        fetchData={fetchData}
        isLoading={isLoading}
        isStickyHeader
        columns={columns}
        rows={booksList.map((book) => ({
          content: book,
          isExtendable: true,
          onClick: handleLoadExtendedInformation,
          extendedInformation: (
            <React.Fragment>
              <strong>Chapters:</strong>
              <br />
              {(book.chapters || []).map(({ chapterName }) => (
                <React.Fragment key={chapterName}>
                  {chapterName}
                  <br />
                </React.Fragment>
              ))}
              ...
            </React.Fragment>
          ),
        }))}
      />
    </div>
  )
}

export default BooksList
