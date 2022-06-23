import React from 'react';
import Image from 'next/image';

function Cart() {
  return (
    <div className='min-h-[calc(100vh-80px)] px-2 py-12 flex flex-col gap-10 text-lg bg-lightYellow md:h-[calc(100vh-128px)] md:flex-row'>
      <div className='md:flex-[2_2_0%]'>
        <table className='w-full text-center text-base'>
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
                    src='/assets/burgers/theclassic.png'
                    alt=''
                    objectFit='cover'
                    width='140'
                    height='100'
                  />
                </div>
              </td>
              <td>
                <span className='text-brown md:font-bold'>THE CLASSIC</span>
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
                    src='/assets/burgers/theclassic.png'
                    alt=''
                    objectFit='cover'
                    width='140'
                    height='100'
                  />
                </div>
              </td>
              <td>
                <span className='text-brown md:font-bold'>THE CLASSIC</span>
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
                    src='/assets/burgers/theclassic.png'
                    alt=''
                    objectFit='cover'
                    width='140'
                    height='100'
                  />
                </div>
              </td>
              <td>
                <span className='text-brown md:font-bold'>THE CLASSIC</span>
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
      <div className='text-center mx-auto md:flex-1'>
        <div className='flex flex-col items-center gap-5 max-w-[400px] max-h-[300px] bg-brown p-12 pt-10 rounded-xl'>
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
          <button className='text-lightYellow font-extrabold border-2 border-lightYellow rounded-lg w-max py-0.5 px-3 md:hover:text-brown md:hover:bg-lightYellow'>
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
