'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchForm({ query, all_recipes }) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState(query || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchPath = all_recipes
      ? `/all-recipes?query=${encodeURIComponent(searchInput)}`
      : `?query=${encodeURIComponent(searchInput)}`;
    router.push(searchPath);
    setSearchInput('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='search-form w-full mt-12'
    >
      <div className='relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2'>
        <input
          name='query'
          placeholder='Your favorite food'
          className='w-full p-4 rounded-full outline-none bg-transparent'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type='submit'
          title='Search recipes'
          className='ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12'
        >
          <span className='hidden text-yellow-900 font-semibold md:block'>
            Search
          </span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 mx-auto text-yellow-900 md:hidden'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1z' />
          </svg>
        </button>
      </div>
    </form>
  );
}
