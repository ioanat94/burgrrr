import React from 'react';

function EventCard() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 p-5 w-[30%] h-[250px] border-solid border-2 rounded-lg border-brown transition-all hover:border-lightYellow hover:shadow-xl hover:bg-[#875431]'>
      <div className='flex flex-col items-center'>
        <h3 className='text-lg font-extrabold'>DOUBLE MEAT NIGHT</h3>
        <span className='text-lg'>25.06 // 18:00-22:00</span>
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
