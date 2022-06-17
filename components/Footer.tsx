import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <>
      <a className='anchor anchor-footer' id='contact'></a>
      <div className='flex px-12 py-4 bg-black text-lightYellow text-center hidden md:block'>
        <div>
          <Image src='/assets/logo.png' alt='' width='170' height='170' />
        </div>
        <div className='flex gap-20 items-center justify-evenly w-full'>
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
