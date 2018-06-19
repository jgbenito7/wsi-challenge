import React from 'react'
import classnames from 'classnames'
import { Carousel } from '../'
import albumsIcon from 'assets/images/albums.svg'

class Product extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      carouselActive: false
    }

    this.setCarouselActive = () => this.setState({ carouselActive: true })
    this.setCarouselInactive = () => this.setState({ carouselActive: false })
  }

  render () {
    const { item } = this.props

    return (
      <div
        className={classnames('product', {
          'product--carousel': this.state.carouselActive
        })}
      >
        <div className='product__carousel'>
          <Carousel
            active={this.state.carouselActive}
            images={item.images}
            onClose={this.setCarouselInactive}
          />
        </div>
        <div className='product__overlay'>
          <button
            className='product__overlay-button'
            onClick={this.setCarouselActive}
          >
            <img
              className='product__overlay-icon'
              src={albumsIcon}
              alt='album'
            />
          </button>
        </div>
        <img
          className='product__hero'
          alt='main product image'
          src={item.hero.href}
        />
        <div className='product__name'>
          <h2>{item.name}</h2>
        </div>
        <div className='product__footer'>
          <div className='product__price'>
            {`$${item.priceRange.selling.high}`}
          </div>
        </div>
      </div>
    )
  }
}

Product.displayName = 'Product'

export default Product
