'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserInDb } from '@/lib/utils';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // create a new user
      const newUser = await createUserInDb({ name, email, phone, password });

      if (newUser) {
        // Store user in localStorage and redirect if successfully created
        localStorage.setItem('user', JSON.stringify(newUser)); 
        setLoading(false);
        router.push('/Login');
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full mt-1 p-2 border border-yellow-300 rounded-md'
          placeholder='Enter your full name'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full mt-1 p-2 border border-yellow-300 rounded-md'
          placeholder='Enter your email'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='phone'
          className='block text-sm font-medium text-gray-700'
        >
          Phone
        </label>
        <input
          type='text'
          id='phone'
          name='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className='w-full mt-1 p-2 border border-yellow-300 rounded-md'
          placeholder='Enter your phone number'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-gray-700'
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full mt-1 p-2 border border-yellow-300 rounded-md'
          placeholder='Enter your password'
          required
        />
      </div>
      {error && <div className='text-red-500 text-sm mb-3'>{error}</div>}
      <button
        type='submit'
        className='w-full py-2 px-4 bg-yellow-300 text-yellow-900 rounded-md hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-700'
        disabled={loading}
      >
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  );
}
