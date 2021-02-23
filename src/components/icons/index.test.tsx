import React from 'react'
import { shallow } from 'enzyme'
import { EmptyIcon, SpinnerIcon } from './index'

describe('components/icons', () => {
  describe('EmptyIcon', () => {
    it('should be rendered', () => {
      expect(shallow(<EmptyIcon />).exists()).toBeTruthy()
    })
  })
  describe('SpinnerIcon', () => {
    it('should be rendered', () => {
      expect(shallow(<SpinnerIcon />).exists()).toBeTruthy()
    })
  })
})
