import React from 'react'
import { shallow } from 'enzyme'
import Tabs, { ITabsProps } from './Tabs'

const defaultProps: ITabsProps = {
  tabsMap: { 'tab-1': 'tab-1-id', 'tab-2': 'tab-2-id', 'tab-3': 'tab-3-id' },
  labelsMap: {
    'tab-1': 'Tab One Name',
    'tab-2': 'Tab Two Name',
    'tab-3': 'Tab Three Name',
  },
  onChange: jest.fn(),
}

describe('components/Tabs', () => {
  it('should be rendered', () => {
    const wrapper = shallow(<Tabs {...defaultProps} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should have only one checked tab at one time', () => {
    const wrapper = shallow(<Tabs {...defaultProps} />)
    const lastTabElement = wrapper
      .find('[data-test-component="TabsItem"]')
      .last()
      .shallow()

    const getCheckedItems = () =>
      wrapper.find('[data-test-component-state="TabsItemChecked"]')

    expect(getCheckedItems().length).toBe(1)

    lastTabElement.simulate('click')

    expect(getCheckedItems().length).toBe(1)
  })

  it('should have first tab checked after render by default', () => {
    const wrapper = shallow(<Tabs {...defaultProps} />)
    const firstTabElement = wrapper
      .find('[data-test-component="TabsItem"]')
      .first()
      .shallow()

    expect(firstTabElement.prop('checked')).toBeTruthy()
  })

  it('should have initial checked tab as initialCheckedTab prop', () => {
    const wrapper = shallow(
      <Tabs {...defaultProps} initialCheckedTab={'tab-3'} />
    )
    const lastTabElement = wrapper
      .find('[data-test-component="TabsItem"]')
      .last()
      .shallow()

    expect(lastTabElement.prop('checked')).toBeTruthy()
  })

  it('should call onChange with tab key on tab click', () => {
    const wrapper = shallow(<Tabs {...defaultProps} />)
    const lastTabElement = wrapper
      .find('[data-test-component="TabsItem"]')
      .last()
      .shallow()

    lastTabElement.simulate('change')

    expect(defaultProps.onChange).toBeCalled()
    expect(defaultProps.onChange).toBeCalledTimes(1)
    expect(defaultProps.onChange).toBeCalledWith('tab-3')
  })

  it('should change checked tab on unchecked tab click', () => {
    const wrapper = shallow(<Tabs {...defaultProps} />)
    const lastTabElement = wrapper
      .find('[data-test-component="TabsItem"]')
      .last()
      .shallow()

    const firstCheckedTabKey = wrapper
      .find('[data-test-component-state="TabsItemChecked"]')
      .first()
      .shallow()
      .prop('value')

    lastTabElement.simulate('change')

    const lastCheckedTabKey = wrapper
      .find('[data-test-component-state="TabsItemChecked"]')
      .first()
      .shallow()
      .prop('value')

    expect(firstCheckedTabKey).not.toEqual(lastCheckedTabKey)
  })
})
