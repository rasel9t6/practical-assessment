import AllRecipe from '@/components/Recipes/AllRecipe';
import React from 'react';

const AllRecipes = () => {
  return (
    <div className='bg-gray-50 min-h-screen flex items-center'>
      <div className='container mx-auto'>
        <AllRecipe />
      </div>
    </div>
  );
};

export default AllRecipes;
