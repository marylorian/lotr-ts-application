import React from 'react'
import classnames from 'classnames'
import EventEmitter from '../../services/emitter'
import { Events } from '../../services/events'
import './styles.css'

enum ENoticeType {
  Error = 'error',
  Info = 'info',
}

interface INotice {
  title?: string
  text: string
  type?: ENoticeType
}

const Notices: React.FunctionComponent = () => {
  const [noticeItems, setNoticeItems] = React.useState<INotice[]>([])
  const handleRemoveNotice = (noticeTitle) => {
    setNoticeItems((prevState) =>
      prevState.filter(({ title }) => title !== noticeTitle)
    )
  }

  React.useEffect(() => {
    EventEmitter.addListener(Events.showException, ({ error, message }) => {
      setNoticeItems((prevState) => [
        ...prevState,
        { title: error, text: message, type: ENoticeType.Error },
      ])

      setTimeout(() => handleRemoveNotice(error), 5000)
    })

    EventEmitter.addListener(Events.showNotice, ({ text, title }) => {
      setNoticeItems((prevState) => [
        ...prevState,
        { title, text, type: ENoticeType.Info },
      ])

      setTimeout(() => handleRemoveNotice(title), 5000)
    })
  }, [])

  return (
    <div className="notices">
      {noticeItems.map(({ type = ENoticeType.Info, text, title }) => (
        <div
          className={classnames('notices__item', `notices__item_${type}`)}
          key={title}>
          <div className="notices__item__title">{title}</div>
          <div className="notices__item__text">{text}</div>
        </div>
      ))}
    </div>
  )
}

export default Notices
