import React from 'react'
import { shallow } from 'enzyme'
import EmptyContent from './EmptyContent'
import { DEFAULT_ACTION_LABEL, DEFAULT_TEXT, DEFAULT_TITLE } from './constants'
import Button from '../Button'

describe('components/EmptyContent', () => {
  it('should be rendered', () => {
    const wrapper = shallow(<EmptyContent />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should have title from title prop or default instead', () => {
    const myTitleProp = 'My title prop'
    const wrapper = shallow(<EmptyContent />)

    expect(
      wrapper.find('.empty-content__title').shallow().contains(DEFAULT_TITLE)
    ).toBeTruthy()

    wrapper.setProps({ title: myTitleProp })

    expect(
      wrapper.find('.empty-content__title').shallow().contains(myTitleProp)
    ).toBeTruthy()
  })

  it('should have text from text prop or default instead', () => {
    const myTextProp = 'My text prop'
    const wrapper = shallow(<EmptyContent />)

    expect(
      wrapper.find('.empty-content__text').shallow().contains(DEFAULT_TEXT)
    ).toBeTruthy()

    wrapper.setProps({ text: myTextProp })

    expect(
      wrapper.find('.empty-content__text').shallow().contains(myTextProp)
    ).toBeTruthy()
  })

  describe('actionButton', () => {
    const wrapper = shallow(<EmptyContent />)

    it('should not has by default', () => {
      expect(wrapper.find(Button).exists()).toBeFalsy()
    })

    it('should have actionButton.label as label or default label instead', () => {
      wrapper.setProps({ actionButton: { onClick: jest.fn() } })

      expect(wrapper.find(Button).shallow().prop('value')).toEqual(
        DEFAULT_ACTION_LABEL
      )

      wrapper.setProps({
        actionButton: { onClick: jest.fn(), label: 'my action label' },
      })
      expect(wrapper.find(Button).shallow().prop('value')).toEqual(
        'my action label'
      )
    })

    it('should call actionButton.onClick on click', () => {
      const myActionButtonProps = { onClick: jest.fn() }

      wrapper.setProps({ actionButton: myActionButtonProps })
      wrapper.find(Button).shallow().simulate('click')

      expect(myActionButtonProps.onClick).toBeCalled()
      expect(myActionButtonProps.onClick).toBeCalledTimes(1)
    })
  })
})
