import Image from 'next/image';
import CloseButton from '../CloseButton';

const SingleRecipe = ({ id, setIsOpen }) => {
 async function name(params) {
   const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recipes/getRecipeDetails?id=${id}`
  );
   const data = await res.json();
   return data
 }

 

  if (!data) return 'Loading...';

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-end'>
        <CloseButton onClick={() => setIsOpen(false)} />
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
    </div>
  );
};

export default SingleRecipe;
