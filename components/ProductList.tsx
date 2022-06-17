import React from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  return (
    <div className='flex flex-col items-center gap-4 px-20 py-10 bg-lightYellow text-black'>
      <h1 className='text-6xl font-extrabold'>
        THE JUICIEST BURGERS IN THE WEST
      </h1>
      <h2 className='text-4xl font-bold'>
        (and east...and north...and south!)
      </h2>
      <p className='text-xl text-center w-[70%]'>
        At <span className='text-brown font-bold'>burGRRR</span>, we refuse to
        serve you anything but the best of the best. Everything on our menu is
        home-made, with fresh ingredients sourced from organic, sustainable
        farmers.
      </p>
      <p className='text-xl text-brown font-bold'>Because we care.</p>
      <div className='flex flex-wrap justify-center gap-10 w-full'>
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
  );
}

export default ProductList;
