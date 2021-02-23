import React from 'react'
import './styles.css'
import EpisodesList from '../EpisodesList'
import { ETabs } from './typings'
import { TAB_LABELS } from './constants'
import { Tabs, EmptyContent } from '../../components'
import BooksList from '../BooksList'
import Notices from '../Notices'

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  const [currentTab, setCurrentTab] = React.useState<ETabs>(ETabs.Films)
  const content = React.useMemo(() => {
    switch (currentTab) {
      case ETabs.Books:
        return <BooksList />
      case ETabs.Films:
        return <EpisodesList />
      default:
        return <EmptyContent />
    }
  }, [currentTab])

  return (
    <div className="app">
      <div className="app__header">
        <div className="app__header__title">
          Welcome to The Lord of the Rings world
        </div>
        <div className="app__header__tabs-wrapper">
          <Tabs
            tabsMap={ETabs}
            labelsMap={TAB_LABELS}
            onChange={(tab) => setCurrentTab(ETabs[tab])}
          />
        </div>
      </div>
      <div className="app__list-wrapper">{content}</div>
      <Notices />
    </div>
  )
}

export default App
