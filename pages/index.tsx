import Events from '../components/Events';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';
import Head from '../node_modules/next/head';

export default function Home() {
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
      <ProductList />
      <Events />
    </div>
  );
}
