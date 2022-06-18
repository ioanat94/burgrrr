import Image from 'next/image';
import React from 'react';

function ProductCard() {
  return (
    <div className='flex flex-col items-center p-5 border-solid border-2 rounded-lg border-lightYellow  md:cursor-pointer md:transition-all md:hover:border-brown md:hover:bg-[#e8e6b3]'>
      <Image src='/assets/burger.png' alt='' width='280' height='200' />
      <h3 className='text-lg font-extrabold text-brown'>THE CLASSIC</h3>
      <span className='text-lg font-bold'>€14.90</span>
      <p className='text-center text-lg'>
        The classic burGRRR experience. Beef patty, lettuce, onions, cheese,
        pickles. What more could you want?
      </p>
    </div>
  );
}

export default ProductCard;
