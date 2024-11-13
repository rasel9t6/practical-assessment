import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-yellow-50'>
      <div className='p-10 bg-white shadow-lg rounded-lg w-full max-w-md'>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
