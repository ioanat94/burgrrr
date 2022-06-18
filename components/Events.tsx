import React from 'react';
import EventCard from './EventCard';

function Events() {
  return (
    <>
      <a className='anchor anchor-events' id='events'></a>
      <div className='flex flex-col items-center gap-8 px-2 md:px-8 lg:px-20 py-10 bg-brown text-lightYellow'>
        <h1 className='text-4xl md:text-6xl font-extrabold text-center'>
          NEED AN EXCUSE TO LEAVE THE HOUSE?
        </h1>
        <p className='text-xl text-center md:w-[80%] lg:w-[70%]'>
          Come hang out with us for a few hours. We promise it'll be worth
          putting some pants on. Bring your friends too!
        </p>
        <div className='flex flex-col items-center gap-4 w-full'>
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </>
  );
}

export default Events;
