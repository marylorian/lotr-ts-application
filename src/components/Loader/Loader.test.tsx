import React from 'react'
import { shallow } from 'enzyme'
import Loader from './Loader'

describe('components/Loader', () => {
  it('should be rendered', () => {
    expect(shallow(<Loader />).exists()).toBeTruthy()
  })
})
