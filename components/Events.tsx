import React from 'react';
import EventCard from './EventCard';

function Events() {
  return (
    <>
      <a className='anchor anchor-events' id='events'></a>
      <div className='flex flex-col items-center gap-8 px-2 py-10 bg-brown text-lightYellow md:px-8 lg:px-20'>
        <h1 className='text-4xl font-extrabold text-center md:text-6xl'>
          NEED AN EXCUSE TO LEAVE THE HOUSE?
        </h1>
        <p className='text-xl text-center md:w-[80%] lg:w-[70%]'>
          Come hang out with us for a few hours. We promise it'll be worth
          putting some pants on. Bring your friends too!
        </p>
        <div className='flex flex-col items-center gap-4 w-full'>
          <EventCard
            title={'DOUBLE MEAT NIGHT'}
            dateTime={'05.08 // 18:00-22:00'}
            description={
              'All beef patties doubled, same price. Fries on the house. First drink on the house.'
            }
          />
          <EventCard
            title={'WE ARE FAMILY'}
            dateTime={'12.08 // 18:00-22:00'}
            description={
              'Get 5% off for every family member you bring along. Free chocolate bar. First drink on the house.'
            }
          />
          <EventCard
            title={'SPORTSBALL NIGHT'}
            dateTime={'19.08 // 18:00-22:00'}
            description={
              'Come watch the game with us. 50% off chips and peanuts. First drink on the house.'
            }
          />
        </div>
      </div>
    </>
  );
}

export default Events;
