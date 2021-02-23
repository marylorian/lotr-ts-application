import React from 'react'
import classnames from 'classnames'
import { IListColumn, IListRow } from '../../typings'
import './styles.css'

export interface IListRowProps extends IListRow<any> {
  columns: IListColumn[]
}

const ListRow: React.FunctionComponent<IListRowProps> = (props) => {
  const {
    isExtendable,
    disabled,
    onClick,
    content,
    columns,
    extendedInformation,
  } = props
  const [isExtended, setIsExtended] = React.useState<boolean>(false)

  const handleClick = () => {
    if (isExtendable) {
      setIsExtended((isExtended) => !isExtended)
    }

    if (disabled) {
      return
    }

    onClick && onClick(content)
  }

  return (
    <React.Fragment>
      {columns.map(({ name: columnName, renderFunction }, index) => (
        <div
          key={`row-${columnName || index}`}
          className={classnames('list-row', {
            'list-row_disabled': disabled,
            'list-row_extended': isExtended,
          })}
          onClick={handleClick}>
          {renderFunction
            ? renderFunction(content)
            : content[columnName || index]}
        </div>
      ))}
      {isExtended ? (
        <div className="list-row__extended-information" onClick={handleClick}>
          {extendedInformation}
        </div>
      ) : null}
    </React.Fragment>
  )
}

export default ListRow
