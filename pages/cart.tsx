import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import axios from 'axios';
import { useRouter } from 'next/router';
import { reset } from '../redux/cartSlice';
import OrderDetails from '../components/OrderDetails';

function Cart() {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart);

  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);

  const amount = cart.total;
  const currency = 'EUR';
  // prettier-ignore
  const style = { "layout": "vertical" };

  const createOrder = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/api/orders', data);
      res.status === 201 && router.push('/orders/' + res.data._id);
      dispatch(reset());
    } catch (err) {
      console.log(err);
    }
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: 'resetOptions',
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className='spinner' />}
        <PayPalButtons
          style={{ layout: 'vertical' }}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={'paypal'}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: `${amount}`,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                paymentMethod: 1,
              });
            });
          }}
        />
      </>
    );
  };

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
            {cart.products.map((product) => (
              <tr key={product._id}>
                <td className='pt-5'>
                  <div>
                    <Image
                      src={product.img}
                      alt=''
                      objectFit='cover'
                      width='140'
                      height='100'
                    />
                  </div>
                </td>
                <td>
                  <span className='text-brown md:font-bold'>
                    {product.title}
                  </span>
                </td>
                <td>
                  <span>
                    {product.extraList.map((extra, i, extraList) => {
                      if (extraList.length - 1 === i) {
                        return <span key={extra._id}>{extra.text}</span>;
                      } else {
                        return <span key={extra._id}>{extra.text}, </span>;
                      }
                    })}
                  </span>
                </td>
                <td>
                  <span>€{product.price}0</span>
                </td>
                <td>
                  <span>{product.quantity}</span>
                </td>
                <td>
                  <span className='font-bold'>
                    €{product.price * product.quantity}0
                  </span>
                </td>
              </tr>
            ))}
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
              <span>€{cart.total}</span>
            </div>
            <div>
              <span className='font-bold mr-2'>Discount: </span>
              <span>€0.00</span>
            </div>
            <div>
              <span className='font-bold mr-2'>Total: </span>
              <span>€{cart.total}</span>
            </div>
          </div>
          {open ? (
            <div className='flex flex-col gap-2'>
              <button
                className='bg-lightYellow text-brown font-bold rounded w-full h-9 md:hover:bg-[#d1ce8e]'
                onClick={() => setCash(true)}
              >
                CASH ON DELIVERY
              </button>
              <PayPalScriptProvider
                options={{
                  'client-id':
                    'Afl0YtnjwhcDMPkoGej1g-h6uvZ9A5QYEUxKZxKAu5922-j2mamiKLwNJTiZCfpKUyt1T97UEYJjCxvZ',
                  components: 'buttons',
                  currency: 'EUR',
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button
              className='text-lightYellow font-extrabold border-2 border-lightYellow rounded-lg w-max py-0.5 px-3 md:hover:text-brown md:hover:bg-lightYellow'
              onClick={() => setOpen(true)}
            >
              CHECKOUT
            </button>
          )}
        </div>
      </div>
      {cash && <OrderDetails total={cart.total} createOrder={createOrder} />}
    </div>
  );
}

export default Cart;
