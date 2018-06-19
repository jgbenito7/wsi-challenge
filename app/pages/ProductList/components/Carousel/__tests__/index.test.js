import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Carousel from '../'

configure({ adapter: new Adapter() })

describe('Carousel', () => {
  const props = {
    images: ['blah1', 'blah2', 'blah3']
  }

  test('renders with first image active', () => {
    const wrapper = mount(<Carousel {...props} />)
    const firstSlideClasses = wrapper.find('.carousel__slide').get(0).props
      .className

    expect(firstSlideClasses).toContain('carousel__slide--visible')
  })

  test('changes active slide on next click', () => {
    const wrapper = mount(<Carousel {...props} />)
    let firstSlideClasses = wrapper.find('.carousel__slide').get(0).props
      .className

    let secondSlideClasses = wrapper.find('.carousel__slide').get(1).props
      .className

    expect(firstSlideClasses).toContain('carousel__slide--visible')
    expect(secondSlideClasses).toContain('carousel__slide--hidden')

    wrapper.find('.carousel__next-button').simulate('click')

    firstSlideClasses = wrapper.find('.carousel__slide').get(0).props.className
    secondSlideClasses = wrapper.find('.carousel__slide').get(1).props.className

    expect(firstSlideClasses).toContain('carousel__slide--hidden')
    expect(secondSlideClasses).toContain('carousel__slide--visible')
  })

  test('calls onClose when close button is clicked', () => {
    const onClose = jest.fn()
    const wrapper = mount(<Carousel {...props} onClose={onClose} />)

    wrapper.find('.carousel__close-button').simulate('click')

    expect(onClose).toHaveBeenCalled()
  })
})
