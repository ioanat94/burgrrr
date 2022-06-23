import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ productList }) {
  return (
    <>
      <a className='anchor anchor-products' id='products'></a>
      <div className='flex flex-col items-center gap-2 px-4 py-2 bg-lightYellow md:gap-4 lg:px-20 lg:py-10'>
        <h1 className='text-4xl font-extrabold text-center md:text-6xl'>
          THE JUICIEST BURGERS IN THE WEST
        </h1>
        <h2 className='text-2xl text-center font-bold md:text-4xl'>
          (and east...and north...and south!)
        </h2>
        <p className='text-lg text-center md:w-[70%] md:text-xl'>
          At <span className='text-brown font-bold'>burGRRR</span>, we refuse to
          serve you anything but the best of the best. Everything on our menu is
          home-made, with fresh ingredients sourced from organic, sustainable
          farmers.
        </p>
        <p className='text-lg text-brown font-bold md:text-xl'>
          Because we care.
        </p>
        <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {productList.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
