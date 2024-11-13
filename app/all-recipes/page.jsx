import RecipesList from '@/components/Recipes/RecipesList';
import React from 'react';

const AllRecipes = async ({ searchParams }) => {
  const query = (await searchParams)?.query;

  let response;
  if (query) {
    response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/api/recipes/searchRecipesByName?query=${encodeURIComponent(query)}`
    );
  } else {
    response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recipes/getAllRecipes`
    );
  }

  const allRecipes = await response.json();

  return (
    <div className='bg-gray-50 py-10'>
      <div className='container mx-auto mt-20'>
            <RecipesList
              recipes={allRecipes}
              all_recipes={true}
              query={query}
              heading='All Recipes'
            />
      </div>
    </div>
  );
};

export default AllRecipes;
