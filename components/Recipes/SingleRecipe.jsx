import { X } from 'lucide-react';
import Image from 'next/image';

const SingleRecipe = ({ data, onClose }) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-end'>
        <button
          onClick={() => onClose(false)}
          className=''
        >
          <X className='size-8 border border-red-500  rounded-full p-1' />
        </button>
      </div>
      <div>
        <Image
          src={data.strMealThumb}
          width={500}
          height={500}
          alt={data.strMeal || 'Recipe Image'}
        />
      </div>
      <h2 className='text-2xl font-semibold'>{data.strMeal}</h2>
      <div className='flex justify-center'>
        <button
          onClick={() => onClose(false)}
          className='w-full font-bold py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleRecipe;
