import React from 'react'
import { shallow } from 'enzyme'
import ListRow, { IListRowProps } from './ListRow'

const initialProps: IListRowProps = {
  columns: [{ name: 'First' }, { name: 'Second' }],
  content: { First: 'first-content', Second: 'second-content' },
  onClick: jest.fn(),
}

describe('components/List/ListRow', () => {
  it('should be rendered', () => {
    expect(shallow(<ListRow {...initialProps} />).exists()).toBeTruthy()
  })

  it('should call onClick on click', () => {
    const wrapper = shallow(<ListRow {...initialProps} />)

    wrapper.find('.list-row').first().simulate('click')

    expect(initialProps.onClick).toBeCalledTimes(1)
    expect(initialProps.onClick).toBeCalledWith(initialProps.content)
  })

  it('should not call onClick on click if disabled=true', () => {
    const wrapper = shallow(<ListRow {...initialProps} disabled={true} />)

    wrapper.find('.list-row').first().simulate('click')

    expect(initialProps.onClick).not.toBeCalled()
  })

  it('should not show extendedInformation on click if isExtendable=false', () => {
    const wrapper = shallow(
      <ListRow
        {...initialProps}
        extendedInformation={'my-extended-information'}
      />
    )

    wrapper.find('.list-row').first().simulate('click')

    expect(wrapper.find('.list-row__extended-information').exists()).toBeFalsy()
  })

  it('should show extendedInformation on click if isExtendable=true', () => {
    const wrapper = shallow(
      <ListRow
        {...initialProps}
        isExtendable={true}
        extendedInformation={'my-extended-information'}
      />
    )

    wrapper.find('.list-row').first().simulate('click')

    expect(
      wrapper.find('.list-row__extended-information').exists()
    ).toBeTruthy()
  })
})
