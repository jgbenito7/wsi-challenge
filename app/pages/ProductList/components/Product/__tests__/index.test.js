import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Product from '../'

configure({ adapter: new Adapter() })

describe('Product', () => {
  const props = {
    item: { images: [], hero: { href: '' }, priceRange: { selling: {} } }
  }

  test('activates carousel on button click', () => {
    const wrapper = mount(<Product {...props} />)

    expect(wrapper.find('.product--carousel').exists()).toBeFalsy()

    wrapper.find('.product__overlay-button').simulate('click')

    expect(wrapper.find('.product--carousel').exists()).toBeTruthy()
  })
})
