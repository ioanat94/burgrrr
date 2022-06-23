import React, { useState } from 'react';
import Image from 'next/image';

function Product() {
  const burger = {
    id: 1,
    img: '/assets/burgers/theclassic.png',
    name: 'THE CLASSIC',
    price: ['12.90', '14.90', '19.90'],
    desc: 'The classic burGRRR experience. Beef patty, lettuce, onions, cheese, pickles. What more could you want?',
  };

  const [option, setOption] = useState(1);

  return (
    <div className='flex flex-col pt-8 min-h-[calc(100vh-128px)] bg-lightYellow md:h-[calc(100vh-128px)] md:pt-0 md:flex-row'>
      <div className='flex items-center justify-center flex-1 h-full'>
        <div>
          <Image
            src={burger.img}
            alt=''
            width='835'
            height='594'
            objectFit='contain'
          />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-5 flex-1 p-5 md:items-start'>
        <h1 className='text-lg font-extrabold text-brown'>{burger.name}</h1>
        <span className='text-lg font-bold border-b border-black w-min'>
          €{burger.price[option]}
        </span>
        <p className='text-lg lg:w-3/4 xl:w-2/3 2xl:w-1/2'>{burger.desc}</p>
        <h3 className='text-lg font-extrabold text-brown'>CHOOSE OPTION</h3>
        <div className='flex flex-col gap-4 justify-between md:flex-row lg:w-3/4 xl:w-2/3 2xl:w-1/2'>
          <div
            className={`flex items-center gap-3 cursor-pointer max-w-max border-b-2 border-lightYellow pb-2 ${
              option === 0 && 'border-[#000]'
            } `}
            onClick={() => setOption(0)}
          >
            <Image
              src='/assets/icons/veggie.png'
              alt=''
              width='50'
              height='50'
            />
            <span className='font-bold'>VEGGIE</span>
          </div>
          <div
            className={`flex items-center gap-3 cursor-pointer max-w-max border-b-2 border-lightYellow pb-2 ${
              option === 1 && 'border-[#000]'
            } `}
            onClick={() => setOption(1)}
          >
            <Image src='/assets/icons/beef.png' alt='' width='50' height='50' />
            <span className='font-bold'>BEEF</span>
          </div>
          <div
            className={`flex items-center gap-3 cursor-pointer max-w-max border-b-2 border-lightYellow pb-2 ${
              option === 2 && 'border-[#000]'
            } `}
            onClick={() => setOption(2)}
          >
            <Image src='/assets/icons/meal.png' alt='' width='50' height='50' />
            <span className='font-bold'>MEAL</span>
          </div>
        </div>
        <h3 className='text-lg font-extrabold text-brown'>EXTRAS</h3>
        <div className='grid grid-cols-1 gap-y-3 md:grid-cols-2 md:grid-rows-3 lg:w-3/4 xl:w-2/3 2xl:w-1/2'>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              id='bacon'
              name='bacon'
              className='w-4 h-4'
            />
            <label htmlFor='bacon' className='text-lg'>
              Bacon
            </label>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              id='caramons'
              name='caramons'
              className='w-4 h-4'
            />
            <label htmlFor='caramons' className='text-lg'>
              Caramelized onions
            </label>
          </div>
          <div className='flex items-center gap-2'>
            <input type='checkbox' id='eggs' name='eggs' className='w-4 h-4' />
            <label htmlFor='eggs' className='text-lg'>
              Fried egg
            </label>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              id='mushrooms'
              name='mushrooms'
              className='w-4 h-4'
            />
            <label htmlFor='mushrooms' className='text-lg'>
              Mushrooms
            </label>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              id='hotsauce'
              name='hotsauce'
              className='w-4 h-4'
            />
            <label htmlFor='hotsauce' className='text-lg'>
              Hot sauce
            </label>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              id='jalapenos'
              name='jalapenos'
              className='w-4 h-4'
            />
            <label htmlFor='jalapenos' className='text-lg'>
              Jalapenos
            </label>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <input type='number' defaultValue={1} className='w-14 h-8 indent-2' />
          <button className='border-2 border-brown rounded-lg py-1 px-2 text-brown font-bold md:hover:text-lightYellow md:hover:bg-brown'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
