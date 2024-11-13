import SignupForm from '@/components/SignupForm';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className='flex justify-center items-center h-screen bg-yellow-50'>
      <div className='w-96 p-6 bg-white rounded-md shadow-md'>
        <h2 className='text-2xl font-semibold text-center mb-4'>Sign Up</h2>
        <SignupForm />
        <div className='text-center mt-4'>
          <span className='text-sm text-gray-600'>
            Already have an account?
          </span>
          <Link
            href='/login'
            className='text-sm text-yellow-600 hover:underline ml-1'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
