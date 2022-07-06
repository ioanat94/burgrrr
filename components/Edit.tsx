import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function Edit({ setClose, product }) {
  const [file, setFile] = useState(product.img);
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [prices, setPrices] = useState(product.prices);
  const [extraOptions, setExtraOptions] = useState(product.extras);
  const [extra, setExtra] = useState(null);

  const router = useRouter();

  const changePrice = (e, i) => {
    const currentPrices = prices;
    currentPrices[i] = e.target.value;
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = (e) => {
    if (extra !== null) {
      setExtraOptions((prev) => [...prev, extra]);
    }
  };

  const handleUpdate = async () => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'uploads');

    try {
      if (file) {
        const uploadRes = await axios.post(
          'https://api.cloudinary.com/v1_1/duwzi0jnc/image/upload',
          data
        );
        const { url } = uploadRes.data;
        const updatedProduct = {
          title,
          description,
          prices,
          extras: extraOptions,
          img: url,
        };
        await axios.put(
          'https://burgrrr.herokuapp.com/api/products/' + product._id,
          updatedProduct
        );
      } else {
        const updatedProduct = {
          title,
          description,
          prices,
          extras: extraOptions,
          img: product.img,
        };
        await axios.put(
          'https://burgrrr.herokuapp.com/api/products/' + product._id,
          updatedProduct
        );
      }

      setClose(true);
      router.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen -ml-2 md:-ml-10 fixed top-0 bg-[#b6b6b64d] z-[999]'>
      <div className='relative rounded-xl flex flex-col gap-4 bg-white w-5/6 px-8 pt-4 pb-4 min-h-max md:w-2/3 lg:w-3/5 xl:w-2/5'>
        <span
          className='absolute right-4 border-2 border-solid rounded-full w-max px-2 font-bold md:transition-all md:hover:border-white md:hover:bg-[#e5e7eb] md:hover:cursor-pointer'
          onClick={() => setClose(true)}
        >
          X
        </span>
        <h1 className='text-xl font-bold text-center'>Edit product</h1>
        <div className='flex gap-12'>
          <label>Choose an image</label>
          <input type='file' onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className='flex items-center gap-20'>
          <label>Title</label>
          <input
            type='text'
            className='w-full border-2 border-solid rounded-lg indent-2 h-8'
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='flex items-center gap-8'>
          <label>Description</label>
          <textarea
            rows={4}
            className='w-full border-2 border-solid rounded-lg px-2'
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label>Prices</label>
          <input
            type='number'
            placeholder='Veggie'
            className='w-max border-2 border-solid rounded-lg indent-2 h-8'
            defaultValue={prices[0]}
            onChange={(e) => changePrice(e, 0)}
          />
          <input
            type='number'
            placeholder='Meat'
            className='w-max border-2 border-solid rounded-lg indent-2 h-8'
            defaultValue={prices[1]}
            onChange={(e) => changePrice(e, 1)}
          />
          <input
            type='number'
            placeholder='Meal'
            className='w-max border-2 border-solid rounded-lg indent-2 h-8'
            defaultValue={prices[2]}
            onChange={(e) => changePrice(e, 2)}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label>Extra</label>
          <div className='flex flex-col gap-4 md:flex-row'>
            <input
              type='text'
              placeholder='Item'
              name='text'
              className='border-2 border-solid rounded-lg indent-2 h-8'
              onChange={handleExtraInput}
            />
            <input
              type='number'
              placeholder='Price'
              name='price'
              className='border-2 border-solid rounded-lg indent-2 h-8'
              onChange={handleExtraInput}
            />
            <button
              className='w-max border-2 border-solid rounded-lg py-1 px-3 md:transition-all md:hover:border-white md:hover:bg-[#e5e7eb]'
              onClick={handleExtra}
            >
              Add
            </button>
          </div>
          <div className='flex gap-2 flex-wrap'>
            {extraOptions.map((option) => (
              <div
                key={option.text}
                className='border-2 border-solid rounded-lg w-max py-1 px-3'
              >
                {option.text}: €{option.price}
              </div>
            ))}
          </div>
        </div>
        <button
          className='mx-auto w-max border-2 border-solid rounded-lg py-1 px-3 md:transition-all md:hover:border-white md:hover:bg-[#e5e7eb]'
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default Edit;
