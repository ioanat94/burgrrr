import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <>
      <a className='anchor anchor-footer' id='contact'></a>
      <div className='flex flex-col gap-4 items-center px-12 pt-4 pb-8 md:pt-8 bg-black text-lightYellow text-center md:flex-row'>
        <div>
          <Image src='/assets/logo.png' alt='' width='170' height='170' />
        </div>
        <div className='flex flex-col gap-12 md:gap-20 items-center justify-evenly w-full md:flex-row md:flex-wrap'>
          <div className='text-3xl'>
            HOW GOOD IS THE{' '}
            <span className='text-orange font-extrabold'>burGRRR</span>
            ?
            <br />
            <span className='text-orange font-extrabold'>GRRReat</span>!
          </div>
          <div>
            <h1 className='text-2xl font-bold text-orange'>
              VISIT OUR RESTAURANT
            </h1>
            <p className='text-xl'>
              Pohjoisesplanadi 72
              <br />
              00160 Helsinki
              <br />
              012 345 6789
              <br />
              contact@burgrrr.com
            </p>
          </div>
          <div>
            <h1 className='text-2xl font-bold text-orange'>WORKING HOURS</h1>
            <p className='text-lg'>
              MONDAY - FRIDAY
              <br /> 12:00 - 20:00
            </p>
            <p className='text-lg'>
              SATURDAY - SUNDAY
              <br /> 14:00 - 22:00
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
