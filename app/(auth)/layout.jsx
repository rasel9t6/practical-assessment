export default function layout({ children }) {
  return (
    <div>
      <div className='flex items-center justify-center min-h-screen bg-yellow-50'>
        <div className='p-10 bg-white shadow-lg rounded-lg w-full max-w-md'>
          {children}
        </div>
      </div>
    </div>
  );
}
