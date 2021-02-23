import React from 'react'
import classnames from 'classnames'
import './styles.css'

export interface ITabsProps {
  tabsMap: { [key: string]: string }
  labelsMap: { [key: string]: string }
  checkedTab?: string
  initialCheckedTab?: string
  onChange: (tabsMapKey: string) => void

  tabsGroupName?: string
}

const Tabs: React.FunctionComponent<ITabsProps> = (props) => {
  const {
    initialCheckedTab,
    labelsMap,
    tabsMap,
    tabsGroupName = 'tabs',
    onChange,
  } = props
  const tabsMapKeys = Object.keys(tabsMap)
  const [currentTab, setCurrentTab] = React.useState<string>(
    initialCheckedTab || tabsMapKeys[0]
  )

  const handleChange = (tabKey) => {
    setCurrentTab(tabKey)
    onChange(tabKey)
  }

  return (
    <div className="tabs">
      {tabsMapKeys.map((tabKey) => {
        const tab = tabsMap[tabKey]
        const isChecked = Boolean(currentTab === tabKey)

        return (
          <div
            key={tabKey}
            className={classnames('tabs__item', {
              tabs__item_checked: isChecked,
            })}>
            <input
              data-test-component="TabsItem"
              data-test-component-state={
                isChecked ? 'TabsItemChecked' : 'TabsItemNonchecked'
              }
              className="tab"
              type="radio"
              name={tabsGroupName}
              id={tab}
              value={tab}
              title={tab}
              checked={isChecked}
              onChange={() => handleChange(tabKey)}
            />
            <label htmlFor={tab}>{labelsMap[tab]}</label>
          </div>
        )
      })}
    </div>
  )
}

export default Tabs
