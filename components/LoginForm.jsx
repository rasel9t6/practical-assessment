'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import InputField from './InputField';
import Link from 'next/link';
import { getUser } from '@/utils/auth-user';

export default function LoginForm() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    try {
      const user = await getUser(email, password);
      if (user) {
        localStorage.setItem('users', JSON.stringify(user));

        setCredentials({ email: '', password: '' });
        setError('');
        router.refresh();
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError(err.message || 'An error occurred');
    }
  };
  return (
    <form
      className='text-yellow-900 space-y-6'
      onSubmit={handleSubmit}
    >
      <InputField
        label='Email'
        id='email'
        type='email'
        placeholder='Enter your email'
        value={credentials.email}
        onChange={handleChange}
      />
      <InputField
        label='Password'
        id='password'
        type='password'
        placeholder='Enter your password'
        value={credentials.password}
        onChange={handleChange}
      />
      {error && <div className='text-red-500 text-sm mb-3'>{error}</div>}
      <button
        type='submit'
        className='w-full py-3 rounded-full bg-yellow-300 text-yellow-900 font-semibold hover:bg-yellow-100 active:bg-yellow-400 focus:ring-2 focus:ring-yellow-200 transition'
      >
        Login
      </button>
      <div className='mt-4 text-center text-sm text-yellow-900'>
        Already have an account?
        <Link
          href='/signup'
          className='underline pl-1 text-yellow-500 hover:text-yellow-700'
        >
          Signup
        </Link>
      </div>
    </form>
  );
}
