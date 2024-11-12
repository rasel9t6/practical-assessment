import { X } from 'lucide-react';
import Link from 'next/link';

export default function SearchFormReset() {
  function reset() {
    const form = document.querySelector('.search-form');
    if (form) form.reset();
  }
  return (
    <button
      type='reset'
      onClick={reset}
      title='Reset search'
    >
      <Link
        href='/all-recipes'
        className='size-[40px] mr-2 rounded-full bg-black flex justify-center items-center !important text-white'
      >
        <X className='size-5' />
      </Link>
    </button>
  );
}
