import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Events from '../components/Events';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';
import Head from '../node_modules/next/head';

export default function Home() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProps = async () => {
      try {
        const res = await axios.get('https://burgrrr.vercel.app/api/products', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setProductList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProps();
  }, []);

  return (
    <div>
      <Head>
        <title>burGRRR</title>
        <meta
          name='description'
          content='Food ordering app for a fictional restaurant'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Slider />
      <div className='bg-lightYellow flex flex-col items-center gap-4 pt-10 md:gap-0'>
        <ProductList productList={productList} />
      </div>
      <Events />
    </div>
  );
}
