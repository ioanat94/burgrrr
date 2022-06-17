import React from 'react';
import Image from 'next/image';

function Order() {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return 'done';
    if (index - status === 1) return 'in-progress';
    if (index - status > 1) return 'not-done';
  };

  return (
    <div className='flex p-12 h-[calc(100vh-128px)]'>
      <div className='flex-[2_2_0%] flex flex-col gap-20'>
        <div>
          <table className='w-3/4'>
            <thead className='text-left'>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th className='text-right'>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className='text-brown font-bold '>451614</span>
                </td>
                <td>
                  <span>Bobby Mackey</span>
                </td>
                <td>
                  <span>Suometsäntie 75, 00740 Helsinki</span>
                </td>
                <td className='text-right'>
                  <span className='font-bold'>€14.90</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='flex justify-between w-3/4'>
          <div className={`flex flex-col items-center gap-2 ${statusClass(0)}`}>
            <Image src='/assets/paid.png' alt='' width='50' height='50' />
            <span>Payment</span>
            <div className='checkmark'>
              <Image src='/assets/checked.png' alt='' width='30' height='30' />
            </div>
          </div>
          <div className={`flex flex-col items-center gap-2 ${statusClass(1)}`}>
            <Image src='/assets/preparing.png' alt='' width='50' height='50' />
            <span>Preparing</span>
            <div className='checkmark'>
              <Image src='/assets/checked.png' alt='' width='30' height='30' />
            </div>
          </div>
          <div className={`flex flex-col items-center gap-2 ${statusClass(2)}`}>
            <Image src='/assets/ontheway.png' alt='' width='50' height='50' />
            <span>On the way</span>
            <div className='checkmark'>
              <Image src='/assets/checked.png' alt='' width='30' height='30' />
            </div>
          </div>
          <div className={`flex flex-col items-center gap-2 ${statusClass(3)}`}>
            <Image src='/assets/delivered.png' alt='' width='50' height='50' />
            <span>Delivered</span>
            <div className='checkmark'>
              <Image src='/assets/checked.png' alt='' width='30' height='30' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex flex-col items-center gap-5 max-w-[400px] max-h-[300px] bg-brown p-12 pt-10'>
          <h2 className='text-lightYellow font-extrabold text-2xl'>
            CART TOTAL
          </h2>
          <div>
            <div>
              <span className='font-bold mr-2'>Subtotal: </span>
              <span>€14.90</span>
            </div>
            <div>
              <span className='font-bold mr-2'>Discount: </span>
              <span>€0.00</span>
            </div>
            <div>
              <span className='font-bold mr-2'>Total: </span>
              <span>€14.90</span>
            </div>
          </div>
          <button
            disabled
            className='text-[#03C0C1] font-extrabold border-2 border-[#03C0C1] rounded-lg w-max py-0.5 px-3 cursor-not-allowed'
          >
            PAID
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;