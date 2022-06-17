import Image from 'next/image';
import React from 'react';

function Navbar() {
  return (
    <div className='sticky top-0 z-[999] flex items-center justify-between h-32 px-12 bg-brown text-lightYellow'>
      <div className='flex items-center gap-5 w-1/5'>
        <Image src='/assets/telephone.png' alt='' width='55' height='55' />
        <div>
          <div className='font-semibold'>ORDER NOW!</div>
          <div className='text-2xl font-bold'>012 345 678</div>
        </div>
      </div>
      <div className='flex items-center w-3/5'>
        <ul className='flex items-center justify-evenly w-full font-semibold text-xl'>
          <li className='transition-all hover:cursor-pointer hover:text-yellow'>
            Home
          </li>
          <li className='transition-all hover:cursor-pointer hover:text-yellow'>
            Menu
          </li>
          <Image src='/assets/logo.png' alt='' width='150' height='150' />
          <li className='transition-all hover:cursor-pointer hover:text-yellow'>
            Events
          </li>
          <li className='transition-all hover:cursor-pointer hover:text-yellow'>
            Contact
          </li>
        </ul>
      </div>
      <div className='relative flex items-center justify-end w-1/5'>
        <Image src='/assets/cart.png' alt='' width='40' height='40' />
        <div className='absolute -top-3 -right-3 bg-lightYellow text-orange font-extrabold px-1.5 text-sm rounded-full'>
          2
        </div>
      </div>
    </div>
  );
}

export default Navbar;
