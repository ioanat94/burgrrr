import React from 'react';

function EventCard({ title, dateTime, description }) {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-5 w-[90%] border-solid border-2 rounded-lg border-brown md:py-10 md:w-[70%] md:transition-all md:hover:border-lightYellow md:hover:shadow-xl md:hover:bg-[#875431] lg:w-[50%] xl:w-[30%]'>
      <div className='flex flex-col items-center'>
        <h3 className='text-lg text-center font-extrabold'>{title}</h3>
        <span className='text-lg text-center'>{dateTime}</span>
      </div>
      <p className='text-center text-lg'>{description}</p>
    </div>
  );
}

export default EventCard;
