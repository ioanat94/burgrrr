import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function Navbar() {
  const [quantity, setQuantity] = useState('');
  const newQuantity = useSelector((state: RootState) => state.cart.quantity);
  useEffect(() => {
    setQuantity(newQuantity);
  }, [newQuantity]);

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
        <Image
          src='/assets/icons/telephone.png'
          alt='Phone icon'
          width='55'
          height='55'
        />
        <div>
          <div className='font-semibold'>ORDER NOW!</div>
          <div className='font-bold md:text-base lg:text-xl'>012 345 6789</div>
        </div>
      </div>
      <div className='flex items-center md:w-[70%] lg:w-[70%] xl:w-3/5'>
        <ul className='flex items-center justify-evenly w-full font-semibold text-xl'>
          <li className='hidden md:block md:transition-all md:hover:cursor-pointer md:hover:text-yellow'>
            <Link href='/' passHref>
              <a>Home</a>
            </Link>
          </li>
          <li className='hidden md:block md:transition-all md:hover:cursor-pointer md:hover:text-yellow'>
            <Link href='/#products' passHref>
              <a>Menu</a>
            </Link>
          </li>
          <div className='relative w-[100px] h-[100px] md:w-[150px] md:h-[150px]'>
            <Link href='/' passHref>
              <a>
                <Image
                  src='/assets/logo.png'
                  alt='Burgrrr logo'
                  layout='fill'
                />
              </a>
            </Link>
          </div>

          <li className='hidden md:block md:transition-all md:hover:cursor-pointer md:hover:text-yellow'>
            <Link href='/#events' passHref>
              <a>Events</a>
            </Link>
          </li>
          <li className='hidden md:block md:transition-all md:hover:cursor-pointer md:hover:text-yellow'>
            <Link href='/#contact' passHref>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='relative flex items-center gap-5 -left-2 cursor-pointer md:justify-end lg:w-[10%] xl:w-1/5'>
        <Link href='/cart' passHref>
          <a>
            <Image src='/assets/icons/cart.png' alt='' width='40' height='40' />
            <div className='absolute -top-3 right-8 bg-lightYellow text-orange font-extrabold px-1.5 text-sm rounded-full md:-right-3'>
              {quantity}
            </div>
          </a>
        </Link>
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
          className='absolute hidden flex-col items-center mx-auto top-12 right-0 py-6 px-10 space-y-6 bg-black'
        >
          <Link href='/' passHref>
            <a onClick={toggleMenu}>Home</a>
          </Link>
          <Link href='/#products' passHref>
            <a onClick={toggleMenu}>Menu</a>
          </Link>
          <Link href='/#events' passHref>
            <a onClick={toggleMenu}>Events</a>
          </Link>
          <Link href='/#contact' passHref>
            <a onClick={toggleMenu}>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
