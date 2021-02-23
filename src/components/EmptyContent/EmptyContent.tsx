import React from 'react'
import { EmptyIcon } from '../icons'
import './styles.css'
import { DEFAULT_ACTION_LABEL, DEFAULT_TEXT, DEFAULT_TITLE } from './constants'
import Button from '../Button'

interface IEmptyContentProps {
  title?: string
  text?: string
  actionButton?: {
    label?: string
    onClick: () => void
  }
}

const EmptyContent: React.FunctionComponent<IEmptyContentProps> = ({
  title = DEFAULT_TITLE,
  text = DEFAULT_TEXT,
  actionButton,
}) => {
  return (
    <div className="empty-content">
      <EmptyIcon width={120} height={120} />
      <div className="empty-content__title">{title}</div>
      <div className="empty-content__text">{text}</div>
      {actionButton && (
        <div className="empty-content__action">
          <Button
            onClick={actionButton.onClick}
            label={actionButton.label || DEFAULT_ACTION_LABEL}
          />
        </div>
      )}
    </div>
  )
}

export default EmptyContent
