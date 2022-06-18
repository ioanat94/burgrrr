import Image from 'next/image';
import React from 'react';

function Navbar() {
  const toggleMenu = () => {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
  };

  return (
    <div className='sticky top-0 z-[999] flex items-center justify-between w-full h-20 px-8 bg-brown text-lightYellow md:px-12 md:h-32'>
      <div className='hidden items-center gap-5 md:flex md:flex-col md:gap-2 lg:flex-row lg:gap-2 lg:w-[20%] xl:w-1/5'>
        <Image src='/assets/telephone.png' alt='' width='55' height='55' />
        <div>
          <div className='font-semibold'>ORDER NOW!</div>
          <div className='font-bold md:text-base lg:text-xl'>012 345 6789</div>
        </div>
      </div>
      <div className='flex items-center md:w-[70%] lg:w-[70%] xl:w-3/5'>
        <ul className='flex items-center justify-evenly w-full font-semibold text-xl'>
          <li className='hidden md:block md:transition-all md:hover:cursor-pointer md:hover:text-yellow'>
            <a href='/'>Home</a>
          </li>
          <li className='hidden md:block md:transition-all md:hover:cursor-pointer md:hover:text-yellow'>
            <a href='#products'>Menu</a>
          </li>
          <div className='relative w-[100px] h-[100px] md:w-[150px] md:h-[150px]'>
            <Image src='/assets/logo.png' alt='' layout='fill' />
          </div>

          <li className='hidden md:block md:transition-all md:hover:cursor-pointer md:hover:text-yellow'>
            <a href='#events'>Events</a>
          </li>
          <li className='hidden md:block md:transition-all md:hover:cursor-pointer md:hover:text-yellow'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
      <div className='relative flex items-center gap-5 -left-2 cursor-pointer md:justify-end lg:w-[10%] xl:w-1/5'>
        <Image src='/assets/cart.png' alt='' width='40' height='40' />
        <div className='absolute -top-3 right-8 bg-lightYellow text-orange font-extrabold px-1.5 text-sm rounded-full md:-right-3'>
          2
        </div>
        <button
          id='menu-btn'
          onClick={toggleMenu}
          className='block hamburger focus:outline-none md:hidden'
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-mid'></span>
          <span className='hamburger-bot'></span>
        </button>
        <div
          id='menu'
          className='absolute hidden flex-col items-center mx-auto top-20 right-2 py-6 px-10 space-y-6 bg-black'
        >
          <a href='/' onClick={toggleMenu}>
            Home
          </a>
          <a href='#products' onClick={toggleMenu}>
            Menu
          </a>
          <a href='#events' onClick={toggleMenu}>
            Events
          </a>
          <a href='#contact' onClick={toggleMenu}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
