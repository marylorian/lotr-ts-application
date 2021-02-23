import React from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { EmptyContent, Loader } from '../../components'
import ListRow from './components/ListRow'
import { getGridColumnsStyle } from './utils'
import { IListColumn, IListRow } from './typings'
import './styles.css'

export interface IListProps<T> {
  isLoading?: boolean
  isStickyHeader?: boolean
  columns: IListColumn[]
  rows: IListRow<T>[]
  fetchData: (params?: { page?: number; limit?: number }) => void
  page?: number
  hasNextPage?: boolean
}

const List: React.FunctionComponent<IListProps<any>> = (props) => {
  const {
    isStickyHeader,
    isLoading,
    columns = [],
    rows = [],
    fetchData,
    page = 0,
    hasNextPage,
  } = props
  const [ref, inView] = useInView({ threshold: 0 })
  const gridTemplateColumnsStyle = React.useMemo(
    () => getGridColumnsStyle(columns),
    [columns]
  )

  React.useEffect(() => {
    if (!rows.length && inView) {
      fetchData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, inView])

  React.useEffect(() => {
    if (rows.length && inView && hasNextPage) {
      fetchData({ page: page + 1 })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, inView, hasNextPage])

  const content = React.useMemo(() => {
    if (isLoading) {
      return <Loader />
    }

    if (!rows.length) {
      return <EmptyContent />
    }

    return rows.map(({ disabled, ...row }, index) => (
      <div
        key={index}
        className={classnames('list__content__row', {
          list__content__row_disabled: disabled,
        })}
        style={gridTemplateColumnsStyle}>
        <ListRow key={index} columns={columns} disabled={disabled} {...row} />
      </div>
    ))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, columns, isLoading])

  return (
    <div
      className={classnames('list', { list_empty: !rows.length || isLoading })}>
      <div
        className={classnames('list__header', {
          list__header_sticky: isStickyHeader,
        })}
        style={gridTemplateColumnsStyle}>
        {columns.map((column) => (
          <div className="list__header__item" key={column.name}>
            {column.name}
          </div>
        ))}
      </div>
      <div className="list__content" ref={ref}>
        {content}
      </div>
    </div>
  )
}

export default List
