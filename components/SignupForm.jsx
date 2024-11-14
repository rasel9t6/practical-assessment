'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from './InputField';
import Link from 'next/link';
import { createUser, getUser } from '@/utils/auth-user';
import toast from 'react-hot-toast';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    cart: [],
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email, password, cart } = formData;

    try {
      const userExists = await getUser(email, password);
      if (userExists) {
        toast.error('User with this email already exists.');
        setError('User with this email already exists.');
        return;
      }

      await createUser({ name, phone, email, password, cart });

      localStorage.setItem('users', JSON.stringify(formData));
      toast.success('Sign up completed! Please log now...');
      router.push('/login');
    } catch (err) {
      toast.error('An error occurred');
      setError(err.message || 'An error occurred');
    }
  };
  return (
    <form
      className='text-yellow-900 space-y-6'
      onSubmit={handleSubmit}
    >
      <InputField
        label='Name'
        id='name'
        type='text'
        placeholder='Your full name'
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        label='Phone'
        id='phone'
        type='tel'
        placeholder='Your phone number'
        value={formData.phone}
        onChange={handleChange}
      />
      <InputField
        label='Email'
        id='email'
        type='email'
        placeholder='Enter your email'
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        label='Password'
        id='password'
        type='password'
        placeholder='Enter your password'
        value={formData.password}
        onChange={handleChange}
      />
      {error && <div className='text-red-500 text-xs'>{error}</div>}
      <button
        type='submit'
        className='w-full py-3 rounded-full bg-yellow-300 text-yellow-900 font-semibold hover:bg-yellow-100 active:bg-yellow-400 focus:ring-2 focus:ring-yellow-200 transition'
      >
        Sign up
      </button>
      <div className='mt-4 text-center text-sm text-yellow-900'>
        Already have an account?
        <Link
          aria-label='Login'
          href='/login'
          className='underline pl-1 text-yellow-500 hover:text-yellow-700'
        >
          Login
        </Link>
      </div>
    </form>
  );
}
