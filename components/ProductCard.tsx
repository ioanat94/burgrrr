import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product._id}`}>
      <div className='flex flex-col items-center p-5 border-solid border-2 rounded-lg border-lightYellow  md:cursor-pointer md:transition-all md:hover:border-brown md:hover:bg-[#e8e6b3]'>
        <Image src={product.img} alt='' width='300' height='250' />
        <h3 className='text-lg font-extrabold text-brown'>{product.title}</h3>
        <span className='text-lg font-bold'>{`€${product.prices[0]}`}</span>
        <p className='text-center text-lg'>{product.description}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
