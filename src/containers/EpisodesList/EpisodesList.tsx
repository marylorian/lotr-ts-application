import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesList } from '../../actions/fetchMoviesList'
import { IListColumn, IListRow, List } from '../../components'
import { selectMoviesState } from '../../selectors/movies'
import './styles.css'
import { IMovie } from '../../typings/movies'
import { TextUtils } from '../../utils/TextUtils'
import { MILLIONS_PLURAL_TEXTS, MINUTES_PLURAL_TEXTS } from './constants'
import { IMoviesState } from '../../reducers/movies'

const EpisodesList: React.FunctionComponent = (props) => {
  const { list: moviesList, page, total } = useSelector<
    IAppState,
    IMoviesState
  >(selectMoviesState)

  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  const dispatch = useDispatch()
  const fetchData = React.useCallback(
    async (params = { page }) => {
      if (!moviesList.length) {
        await dispatch(fetchMoviesList({ page }))
      }

      setIsLoading(false)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [moviesList]
  )

  const columns: IListColumn[] = React.useMemo(
    () => [
      {
        name: 'Name',
        renderFunction: ({ name }: IMovie) => <div>"{name}"</div>,
      },
      {
        name: 'Runtime in minutes',
        renderFunction: ({ runtimeInMinutes }: IMovie) => (
          <div>
            {TextUtils.pluralizeStringByCount(
              runtimeInMinutes,
              MINUTES_PLURAL_TEXTS
            )}
          </div>
        ),
      },
      {
        name: 'Budget in millions',
        renderFunction: ({ budgetInMillions }: IMovie) => (
          <div>
            {TextUtils.pluralizeStringByCount(
              budgetInMillions,
              MILLIONS_PLURAL_TEXTS
            )}
          </div>
        ),
      },
    ],
    []
  )

  return (
    <div className="episodes-list">
      <List
        hasNextPage={moviesList.length < total}
        page={page}
        fetchData={fetchData}
        isLoading={isLoading}
        columns={columns}
        isStickyHeader
        rows={
          moviesList.map((movie) => ({
            content: movie,
            isExtendable: true,
            extendedInformation: (
              <React.Fragment>
                <strong>Academy Award Nominations:</strong>{' '}
                {movie.academyAwardNominations}
                <br />
                <strong>Academy Award Wins:</strong> {movie.academyAwardWins}
              </React.Fragment>
            ),
          })) as IListRow<IMovie>[]
        }
      />
    </div>
  )
}

export default EpisodesList
