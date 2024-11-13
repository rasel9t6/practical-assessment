export default function Skeleton() {
  return (
    <div className='space-y-4 p-4'>
      <div className='animate-pulse flex space-x-4'>
        <div className='bg-gray-300 rounded-lg h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40'></div>
        <div className='flex-1 space-y-4 py-1'>
          <div className='h-4 bg-gray-300 rounded w-3/4'></div>
          <div className='space-y-2'>
            <div className='h-4 bg-gray-300 rounded'></div>
            <div className='h-4 bg-gray-300 rounded w-5/6'></div>
          </div>
        </div>
      </div>

      <div className='mt-4 h-10 w-1/3 bg-gray-300 rounded-lg'></div>
    </div>
  );
}
