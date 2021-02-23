import React from 'react'
import { shallow } from 'enzyme'
import List, { IListProps } from './List'
import Loader from '../Loader'
import EmptyContent from '../EmptyContent'
import ListRow from './components/ListRow'

const initialProps: IListProps<any> = {
  columns: [{ name: 'First' }, { name: 'Second' }],
  rows: [
    { content: 'a lot of first content' },
    { content: 'a lot of second content' },
  ],
}

describe('components/List', () => {
  it('should be rendered', () => {
    expect(shallow(<List {...initialProps} />).exists()).toBeTruthy()
  })

  it('should render Loader when isLoading=true', () => {
    const wrapper = shallow(<List {...initialProps} isLoading={true} />)

    expect(wrapper.find(Loader).exists()).toBeTruthy()
  })

  it('should render EmptyContent when rows are empty', () => {
    const wrapper = shallow(<List {...initialProps} rows={[]} />)

    expect(wrapper.find(EmptyContent).exists()).toBeTruthy()
  })

  it('should have postfix "sticky" in header class if isStickyHeader=true', () => {
    const wrapper = shallow(<List {...initialProps} isStickyHeader={true} />)

    expect(wrapper.find('.list__header_sticky').exists()).toBeTruthy()
  })

  it('should render data from rows prop in ListRow', () => {
    const wrapper = shallow(<List {...initialProps} />)

    expect(wrapper.find(ListRow).length).toEqual(initialProps.rows.length)
  })
})
