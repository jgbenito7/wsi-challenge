import React from 'react'
import * as PureCarousel from 'pure-react-carousel'
import cancelIcon from 'assets/images/cancel.svg'
import backIcon from 'assets/images/back.svg'
import nextIcon from 'assets/images/next.svg'
import 'pure-react-carousel/dist/react-carousel.es.css'

const Carousel = props => (
  <div className='carousel'>
    <button className='carousel__close-button' onClick={props.onClose}>
      <img
        className='carousel__close-button-icon'
        src={cancelIcon}
        alt='cancel'
      />
    </button>
    <PureCarousel.CarouselProvider
      naturalSlideWidth={300}
      naturalSlideHeight={300}
      totalSlides={props.images.length}
    >
      <PureCarousel.Slider>
        {props.images.map(({ href }, i) => (
          <PureCarousel.Slide key={i} index={i}>
            <img
              className='carousel__image'
              src={href}
              alt={`carousel image ${i}`}
            />
          </PureCarousel.Slide>
        ))}
      </PureCarousel.Slider>
      <PureCarousel.ButtonBack>
        <img className='carousel__nav-icon' src={backIcon} />
      </PureCarousel.ButtonBack>
      <PureCarousel.ButtonNext>
        <img className='carousel__nav-icon' src={nextIcon} />
      </PureCarousel.ButtonNext>
      <PureCarousel.DotGroup />
    </PureCarousel.CarouselProvider>
  </div>
)

export default Carousel
