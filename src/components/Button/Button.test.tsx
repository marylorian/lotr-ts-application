import React from 'react'
import { shallow } from 'enzyme'
import Button, { IButtonProps } from './Button'

const defaultProps: IButtonProps = {
  label: 'my label prop',
  onClick: jest.fn(),
}

describe('components/Button', () => {
  it('should be rendered', () => {
    const wrapper = shallow(<Button {...defaultProps} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should have label from label prop', () => {
    const wrapper = shallow(<Button {...defaultProps} />)

    expect(wrapper.find('.button').shallow().prop('value')).toEqual(
      defaultProps.label
    )
  })

  it('should have additional className from className prop', () => {
    const myClassNameProp = 'my-classname-prop'
    const wrapper = shallow(
      <Button {...defaultProps} className={myClassNameProp} />
    )

    expect(wrapper.find(`.${myClassNameProp}`).exists()).toBeTruthy()
  })

  describe('theme prop', () => {
    it('should have theme Primary by default', () => {
      const wrapper = shallow(<Button {...defaultProps} />)

      expect(
        wrapper.find(`.button_${Button.Theme.Primary}`).exists()
      ).toBeTruthy()
    })

    it('should have postfix with theme name', () => {
      const wrapper = shallow(
        <Button {...defaultProps} theme={Button.Theme.Muted} />
      )

      expect(
        wrapper.find(`.button_${Button.Theme.Muted}`).exists()
      ).toBeTruthy()
    })
  })

  it('should call onClick on click', () => {
    const wrapper = shallow(<Button {...defaultProps} />)

    wrapper.simulate('click')

    expect(defaultProps.onClick).toBeCalled()
    expect(defaultProps.onClick).toBeCalledTimes(1)
  })
})
