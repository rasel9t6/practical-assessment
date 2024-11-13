import SignupForm from '@/components/SignupForm';

export default function SignupPage() {
  return (
    <div className='flex justify-center items-center h-screen bg-yellow-50'>
      <div className='w-96 p-6 bg-white rounded-md shadow-md'>
        <h2 className='text-2xl font-semibold text-center mb-4'>Sign Up</h2>
        <SignupForm />
      </div>
    </div>
  );
}
