import React from 'react';
import Image from 'next/image';
import axios from 'axios';

function Order({ order }) {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return 'done';
    if (index - status === 1) return 'in-progress';
    if (index - status > 1) return 'not-done';
  };

  return (
    <div className='flex flex-col gap-10 px-4 py-8 min-h-[calc(100vh-80px)] md:p-12 md:h-[calc(100vh-128px)] md:flex-row'>
      <div className='md:flex-[2_2_0%] flex flex-col gap-20'>
        <div>
          <table className='text-center table-fixed md:text-left md:w-3/4'>
            <thead className='align-top'>
              <tr>
                <th className='text-center md:text-left'>Order ID</th>
                <th className='text-center md:text-left'>Customer</th>
                <th className='text-center md:text-left'>Address</th>
                <th className='text-center md:text-right'>Total</th>
              </tr>
            </thead>
            <tbody className='align-top'>
              <tr>
                <td className='w-1/4 break-all'>
                  <span className='text-brown font-bold'>{order._id}</span>
                </td>
                <td>
                  <span>{order.customer}</span>
                </td>
                <td>
                  <span>{order.address}</span>
                </td>
                <td className='text-right'>
                  <span className='font-bold'>€{order.total}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='flex justify-between md:w-3/4'>
          <div className={`flex flex-col items-center gap-2 ${statusClass(0)}`}>
            <Image src='/assets/icons/paid.png' alt='' width='50' height='50' />
            <span>Payment</span>
            <div className='checkmark'>
              <Image
                src='/assets/icons/checked.png'
                alt=''
                width='30'
                height='30'
              />
            </div>
          </div>
          <div className={`flex flex-col items-center gap-2 ${statusClass(1)}`}>
            <Image
              src='/assets/icons/preparing.png'
              alt=''
              width='50'
              height='50'
            />
            <span>Preparing</span>
            <div className='checkmark'>
              <Image
                src='/assets/icons/checked.png'
                alt=''
                width='30'
                height='30'
              />
            </div>
          </div>
          <div className={`flex flex-col items-center gap-2 ${statusClass(2)}`}>
            <Image
              src='/assets/icons/ontheway.png'
              alt=''
              width='50'
              height='50'
            />
            <span>On the way</span>
            <div className='checkmark'>
              <Image
                src='/assets/icons/checked.png'
                alt=''
                width='30'
                height='30'
              />
            </div>
          </div>
          <div className={`flex flex-col items-center gap-2 ${statusClass(2)}`}>
            <Image
              src='/assets/icons/delivered.png'
              alt=''
              width='50'
              height='50'
            />
            <span>Delivered</span>
            <div className='checkmark'>
              <Image
                src='/assets/icons/checked.png'
                alt=''
                width='30'
                height='30'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mx-auto md:flex-1'>
        <div className='flex flex-col items-center gap-5 max-w-[400px] max-h-[300px] bg-brown p-12 pt-10 rounded-xl'>
          <h2 className='text-lightYellow font-extrabold text-2xl'>
            CART TOTAL
          </h2>
          <div>
            <div>
              <span className='font-bold mr-2'>Subtotal: </span>
              <span>€{order.total}</span>
            </div>
            <div>
              <span className='font-bold mr-2'>Discount: </span>
              <span>€0.00</span>
            </div>
            <div>
              <span className='font-bold mr-2'>Total: </span>
              <span>€{order.total}</span>
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

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: {
      order: res.data,
    },
  };
};

export default Order;
