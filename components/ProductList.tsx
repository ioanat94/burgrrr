import React from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  return (
    <>
      <a className='anchor anchor-menu' id='menu'></a>
      <div className='flex flex-col items-center gap-2 md:gap-4 px-4 py-2 lg:px-20 bg-lightYellow'>
        <h1 className='text-4xl md:text-6xl font-extrabold text-center'>
          THE JUICIEST BURGERS IN THE WEST
        </h1>
        <h2 className='text-2xl md:text-4xl text-center font-bold'>
          (and east...and north...and south!)
        </h2>
        <p className='text-lg md:text-xl text-center md:w-[70%]'>
          At <span className='text-brown font-bold'>burGRRR</span>, we refuse to
          serve you anything but the best of the best. Everything on our menu is
          home-made, with fresh ingredients sourced from organic, sustainable
          farmers.
        </p>
        <p className='text-lg md:text-xl text-brown font-bold'>
          Because we care.
        </p>
        <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default ProductList;
