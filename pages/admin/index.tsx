import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';

function Index({ products, orders }) {
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ['Preparing', 'On the way', 'Delivered'];

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        'http://localhost:3000/api/products/' + id
      );
      setProductList(productList.filter((product) => product._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put('http://localhost:3000/api/orders/' + id, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='min-h-[calc(100vh-80px)] bg-lightYellow flex flex-col gap-12 pt-6 px-2 md:pt-10 md:px-10 md:min-h-[calc(100vh-128px)]'>
      <div className='flex flex-col gap-6 w-full'>
        <h1 className='text-2xl font-bold'>Products</h1>
        <table className='text-left'>
          <thead>
            <tr>
              <th>Image</th>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr key={product._id}>
                <td>
                  <Image
                    src={`/assets/burgers/${product.img}`}
                    alt=''
                    objectFit='cover'
                    width='140'
                    height='100'
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>€{product.prices[1]}</td>
                <td className='flex pt-6 gap-2 pt-[34px] md:pt-9'>
                  <button>
                    <Image
                      src='/assets/icons/edit.png'
                      width='30'
                      height='30'
                    />
                  </button>
                  <button onClick={() => handleDelete(product._id)}>
                    <Image
                      src='/assets/icons/delete.png'
                      width='30'
                      height='30'
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex flex-col gap-12 w-full'>
        <h1 className='text-2xl font-bold'>Orders</h1>
        <table className='text-left'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order) => (
              <tr key={order._id}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>€{order.total}</td>
                <td>
                  {order.paymentMethod === 0 ? (
                    <span>Cash</span>
                  ) : (
                    <span>Paypal</span>
                  )}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button
                    className='pl-4'
                    onClick={() => handleStatus(order._id)}
                  >
                    <Image
                      src='/assets/icons/next.png'
                      width='24'
                      height='24'
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || '';

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }

  const productList = await axios.get('http://localhost:3000/api/products');
  const orderList = await axios.get('http://localhost:3000/api/orders');

  return {
    props: {
      products: productList.data,
      orders: orderList.data,
    },
  };
};

export default Index;
