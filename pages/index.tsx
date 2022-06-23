import axios from 'axios';
import Events from '../components/Events';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';
import Head from '../node_modules/next/head';

export default function Home({ productList }) {
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
      <ProductList productList={productList} />
      <Events />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      productList: res.data,
    },
  };
};
