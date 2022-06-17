import Image from 'next/image';
import React, { useState } from 'react';

function Slider() {
  const featured: string[] = [
    '/assets/slider1.jpeg',
    '/assets/slider2.jpeg',
    '/assets/slider3.jpg',
  ];

  const [index, setIndex] = useState(0);

  const handleSlide = (direction: string) => {
    if (direction === 'left') {
      setIndex(index !== 0 ? index - 1 : 2);
    } else {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div
      className='slider-wrapper relative h-[calc(100vh-128px)] bg-black overflow-hidden'
      style={{ transition: 'all 1.5s ease-in-out' }}
    >
      <div
        className='absolute flex items-center top-0 bottom-0 left-0 pl-5 m-auto w-20 h-20 z-50 hover:cursor-pointer'
        onClick={() => handleSlide('left')}
      >
        <Image src='/assets/arrow-left.png' alt='' width='60' height='60' />
      </div>
      <div
        className='flex w-[300vw] h-full'
        style={{
          transform: `translateX(${-100 * index}vw)`,
          transition: 'all 1s ease-in-out',
        }}
      >
        {featured.map((item, i) => (
          <div key={i} className='relative w-screen h-full'>
            <Image
              priority
              src={item}
              alt=''
              layout='fill'
              className='object-cover object-center'
            />
          </div>
        ))}
      </div>
      <div
        className='absolute flex items-center top-0 bottom-0 right-0 m-auto w-20 h-20 hover:cursor-pointer'
        onClick={() => handleSlide('right')}
      >
        <Image src='/assets/arrow-right.png' alt='' width='60' height='60' />
      </div>
    </div>
  );
}

export default Slider;
