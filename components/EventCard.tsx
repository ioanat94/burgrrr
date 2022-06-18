import React from 'react';

function EventCard() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-5 w-[90%] border-solid border-2 rounded-lg border-brown md:py-10 md:w-[70%] md:transition-all md:hover:border-lightYellow md:hover:shadow-xl md:hover:bg-[#875431] lg:w-[50%] xl:w-[30%]'>
      <div className='flex flex-col items-center'>
        <h3 className='text-lg text-center font-extrabold'>
          DOUBLE MEAT NIGHT
        </h3>
        <span className='text-lg text-center'>25.06 // 18:00-22:00</span>
      </div>
      <p className='text-center text-lg'>
        All beef patties doubled, same price.
        <br /> Fries on the house.
        <br /> First drink on the house.
      </p>
    </div>
  );
}

export default EventCard;
