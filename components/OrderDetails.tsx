import React, { useState } from 'react';

function OrderDetails({ total, createOrder, setClose }) {
  const [customer, setCustomer] = useState('');
  const [address, setAddress] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (customer !== '' && address !== '') {
      createOrder({ customer, address, total, paymentMethod: 0 });
    }
  };

  return (
    <div className='absolute top-0 left-0 w-full h-[calc(100vh+48px)] flex items-center justify-center bg-[#7c7c7c66] z-[100]'>
      <div className='relative w-[95%] px-4 md:w-[600px] md:px-16 bg-white rounded-lg p-16 flex flex-col gap-8 items-center justify-center'>
        <span
          className='absolute right-4 top-4 border-2 border-solid rounded-full w-max px-2 font-bold md:transition-all md:hover:border-white md:hover:bg-[#e5e7eb] md:hover:cursor-pointer'
          onClick={() => setClose(false)}
        >
          X
        </span>
        <h1 className='text-3xl text-center'>
          You will pay €{total} after delivery
        </h1>
        <form
          onSubmit={(e) => onSubmit(e)}
          className='w-full md:w-[600px] md:px-16 flex flex-col gap-8 items-center justify-center'
        >
          <div className='flex flex-col gap-2 w-full'>
            <label>Full Name</label>
            <input
              type='text'
              placeholder='John Doe'
              className='indent-2 h-12 border-2 border-solid rounded-lg'
              required
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label>Phone Number</label>
            <input
              type='text'
              placeholder='012 345 6789'
              className='indent-2 h-12 border-2 border-solid rounded-lg'
            />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label>Address</label>
            <input
              type='text'
              placeholder='Pohjoisesplanadi 72 00160 Helsinki'
              className='indent-2 h-12 border-2 border-solid rounded-lg'
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button
            className='border-2 border-solid rounded-lg py-2 px-6 cursor-pointer md:transition-all md:hover:border-white md:hover:bg-[#e5e7eb]'
            onClick={handleClick}
          >
            Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderDetails;
