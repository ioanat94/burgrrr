import React from 'react';
import Image from 'next/image';

function Cart() {
  return (
    <div className='py-12 flex gap-10 text-lg bg-lightYellow h-[calc(100vh-128px)]'>
      <div className='flex-[2_2_0%]'>
        <table className='w-full text-center'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='pt-5'>
                <div>
                  <Image
                    src='/assets/burger.png'
                    alt=''
                    objectFit='cover'
                    width='140'
                    height='100'
                  />
                </div>
              </td>
              <td>
                <span className='text-brown font-bold '>THE CLASSIC</span>
              </td>
              <td>
                <span>Bacon, Hot sauce</span>
              </td>
              <td>
                <span>€14.90</span>
              </td>
              <td>
                <span>1</span>
              </td>
              <td>
                <span className='font-bold'>€14.90</span>
              </td>
            </tr>
            <tr>
              <td className='pt-5'>
                <div>
                  <Image
                    src='/assets/burger.png'
                    alt=''
                    objectFit='cover'
                    width='140'
                    height='100'
                  />
                </div>
              </td>
              <td>
                <span className='text-brown font-bold '>THE CLASSIC</span>
              </td>
              <td>
                <span>Bacon, Hot sauce</span>
              </td>
              <td>
                <span>€14.90</span>
              </td>
              <td>
                <span>1</span>
              </td>
              <td>
                <span className='font-bold'>€14.90</span>
              </td>
            </tr>
            <tr>
              <td className='pt-5'>
                <div>
                  <Image
                    src='/assets/burger.png'
                    alt=''
                    objectFit='cover'
                    width='140'
                    height='100'
                  />
                </div>
              </td>
              <td>
                <span className='text-brown font-bold '>THE CLASSIC</span>
              </td>
              <td>
                <span>Bacon, Hot sauce</span>
              </td>
              <td>
                <span>€14.90</span>
              </td>
              <td>
                <span>1</span>
              </td>
              <td>
                <span className='font-bold'>€14.90</span>
              </td>
            </tr>
          </tbody>
        </table>
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
          <button className='text-lightYellow font-extrabold border-2 border-lightYellow rounded-lg w-max py-0.5 px-3 hover:text-brown hover:bg-lightYellow'>
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
