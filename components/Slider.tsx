import Image from 'next/image';
import React from 'react';
import Carousel from 'react-slick';

function Slider() {
  var settings: object = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='bg-lightYellow'>
      <Carousel {...settings}>
        <div>
          <Image
            src='/assets/sliders/slider1.jpeg'
            alt=''
            width='1280'
            height='854'
          />
        </div>
        <div>
          <Image
            src='/assets/sliders/slider2.jpeg'
            alt=''
            width='1280'
            height='854'
          />
        </div>
        <div>
          <Image
            src='/assets/sliders/slider3.jpg'
            alt=''
            width='1280'
            height='854'
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
