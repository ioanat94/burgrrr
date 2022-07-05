import axios from 'axios';
import { useState } from 'react';
import Add from '../components/Add';
import AddButton from '../components/AddButton';
import Events from '../components/Events';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';
import Head from '../node_modules/next/head';

export default function Home({ productList, isAdmin }) {
  const [close, setClose] = useState(true);

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
        {isAdmin && <AddButton setClose={setClose} />}
        <ProductList productList={productList} />
      </div>
      {!close && <Add setClose={setClose} />}
      <Events />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || '';
  let isAdmin = false;

  if (myCookie.token === process.env.TOKEN) {
    isAdmin = true;
  }

  const res = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      productList: res.data,
      isAdmin,
    },
  };
};
