import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post('https://burgrrr.vercel.app/api/login', {
        username,
        password,
      });
      setError(false);
      router.push('/admin');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className='min-h-[calc(100vh-80px)] flex items-center justify-center bg-lightYellow md:h-[calc(100vh-128px)]'>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-4xl text-brown font-bold'>Admin Dashboard</h1>
        <input
          type='text'
          placeholder='Username'
          className='h-10 indent-2 rounded-lg w-full'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          className='h-10 indent-2 rounded-lg w-full'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='border-2 border-solid border-brown text-brown font-bold rounded-lg py-1 px-3 w-max md:transition-all md:hover:border-lightYellow md:hover:bg-brown md:hover:text-lightYellow'
          onClick={handleClick}
        >
          Sign in
        </button>
        {error && (
          <span className='text-red-600 text-lg'>
            Wrong username or password
          </span>
        )}
      </div>
    </div>
  );
}

export default Login;
