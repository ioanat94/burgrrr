import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';

function Product({ product }) {
  const [price, setPrice] = useState(product.prices[1]);
  const [option, setOption] = useState(1);
  const [extraList, setExtraList] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleOption = (optionIndex) => {
    const difference = product.prices[optionIndex] - product.prices[option];
    setOption(optionIndex);
    changePrice(difference);
  };

  const handleChange = (e, extra) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(extra.price);
      setExtraList((prev) => [...prev, extra]);
    } else {
      changePrice(-extra.price);
      setExtraList(extraList.filter((ex) => ex._id != extra._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, extraList, price, quantity }));
  };

  return (
    <div className='flex flex-col pt-8 min-h-[calc(100vh-128px)] bg-lightYellow md:h-[calc(100vh-128px)] md:pt-0 md:flex-row'>
      <div className='flex items-center justify-center flex-1 h-full'>
        <div>
          <Image
            src={`/assets/burgers/${product.img}`}
            alt=''
            width='835'
            height='594'
            objectFit='contain'
          />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-5 flex-1 p-5 md:items-start'>
        <h1 className='text-lg font-extrabold text-brown'>{product.title}</h1>
        <span className='text-lg font-bold border-b border-black w-min'>
          €{price.toFixed(2)}
        </span>
        <p className='text-lg lg:w-3/4 xl:w-2/3 2xl:w-1/2'>
          {product.description}
        </p>
        <h3 className='text-lg font-extrabold text-brown'>CHOOSE OPTION</h3>
        <div className='flex flex-col gap-4 justify-between md:flex-row lg:w-3/4 xl:w-2/3 2xl:w-1/2'>
          <div
            className={`flex items-center gap-3 cursor-pointer max-w-max border-b-2 border-lightYellow pb-2 ${
              option === 0 && 'border-[#000]'
            } `}
            onClick={() => handleOption(0)}
          >
            <Image
              src='/assets/icons/veggie.png'
              alt=''
              width='50'
              height='50'
            />
            <span className='font-bold'>VEGGIE</span>
          </div>
          <div
            className={`flex items-center gap-3 cursor-pointer max-w-max border-b-2 border-lightYellow pb-2 ${
              option === 1 && 'border-[#000]'
            } `}
            onClick={() => handleOption(1)}
          >
            <Image src='/assets/icons/beef.png' alt='' width='50' height='50' />
            <span className='font-bold'>MEAT</span>
          </div>
          <div
            className={`flex items-center gap-3 cursor-pointer max-w-max border-b-2 border-lightYellow pb-2 ${
              option === 2 && 'border-[#000]'
            } `}
            onClick={() => handleOption(2)}
          >
            <Image src='/assets/icons/meal.png' alt='' width='50' height='50' />
            <span className='font-bold'>MEAL</span>
          </div>
        </div>
        <h3 className='text-lg font-extrabold text-brown'>EXTRAS</h3>
        <div className='grid grid-cols-1 gap-y-3 md:grid-cols-2 md:grid-rows-3 lg:w-3/4 xl:w-2/3 2xl:w-1/2'>
          {product.extras.map((extra) => (
            <div className='flex items-center gap-2' key={extra._id}>
              <input
                type='checkbox'
                id={extra.text}
                name={extra.text}
                className='w-4 h-4'
                onChange={(e) => handleChange(e, extra)}
              />
              <label htmlFor={extra.text} className='text-lg'>
                {extra.text}
              </label>
            </div>
          ))}
        </div>
        <div className='flex items-center gap-5'>
          <input
            type='number'
            defaultValue={1}
            className='w-14 h-8 indent-2'
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button
            className='border-2 border-brown rounded-lg py-1 px-2 text-brown font-bold md:hover:text-lightYellow md:hover:bg-brown'
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};

export default Product;
