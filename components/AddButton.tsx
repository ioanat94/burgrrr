import React from 'react';

function AddButton({ setClose }) {
  return (
    <button
      className='w-max border-2 border-solid border-brown rounded-lg text-brown font-bold py-1 px-2 md:transition-all md:hover:bg-brown md:hover:text-lightYellow md:hover:border-lightYellow'
      onClick={() => setClose(false)}
    >
      Add Product
    </button>
  );
}

export default AddButton;
