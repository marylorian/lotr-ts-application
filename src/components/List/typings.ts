import React from 'react'

export interface IListColumn {
  key?: string
  name?: string
  minWidth?: string | number
  renderFunction?: (dataItem: any) => React.ReactNode
}

export interface IListRow<T> {
  isExtendable?: boolean
  extendedInformation?: string | React.ReactNode
  disabled?: boolean
  content: T
  onClick?: (content: T) => void
}
