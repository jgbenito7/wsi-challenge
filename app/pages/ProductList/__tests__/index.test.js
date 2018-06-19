import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import productData from 'assets/json/data.json'
import ProductList from '../'

configure({ adapter: new Adapter() })

describe('Product List', () => {
  test('renders a product list', () => {
    const wrapper = mount(<ProductList />)
    const productGroupLength = productData.groups.length

    expect(wrapper.find('.product')).toHaveLength(productGroupLength)
  })

  test('filters products based on search', () => {
    const wrapper = mount(<ProductList />)

    wrapper.setState({
      ...wrapper.state(),
      filterParams: { search: 'rose', sortBy: '' }
    })

    expect(wrapper.find('.product')).toHaveLength(1)
  })

  test('sorts products based on sortBy value', () => {
    const wrapper = mount(<ProductList />)
    let lastPrice = wrapper.find('.product__price').at(9).text()

    expect(lastPrice).toEqual('$89')

    wrapper.setState({
      ...wrapper.state(),
      filterParams: { search: '', sortBy: { value: 'priceAsc' } }
    })

    lastPrice = wrapper.find('.product__price').at(9).text()

    expect(lastPrice).toEqual('$149')
  })
})
