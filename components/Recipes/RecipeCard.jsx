'use client';
import Image from 'next/image';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div
      title={recipe?.strMeal}
      onClick={onClick}
      className='group space-y-6 border border-gray-100  rounded-3xl bg-white  px-4 py-4 text-center shadow hover:cursor-pointer hover:shadow-xl transition duration-200 shadow-gray-600/10'
    >
      <Image
        className='mx-auto rounded-2xl'
        src={recipe?.strMealThumb}
        alt={recipe?.strMeal || 'Recipe'}
        loading='lazy'
        width={500}
        height={500}
      />
      <h2 className='text-2xl font-semibold text-gray-800'>
        {recipe?.strMeal}
      </h2>
      <p>
        Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum,
        consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea
        animi officiis.
      </p>
      <div className='relative mx-auto flex items-center justify-center invisible  group-hover:visible'>
        <button className='text-primary'>Click to see details</button>
      </div>
    </div>
  );
};

export default RecipeCard;
