import Modal from '@/components/Modal';
import RecipeCard from '@/components/Recipes/RecipeCard';
import SingleRecipe from '@/components/Recipes/SingleRecipe';
import SearchForm from '@/components/SearchForm';
import React from 'react';

const AllRecipes = async ({ searchParams }) => {
  const query = (await searchParams)?.query;
  console.log(query);
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

  console.log(allRecipes);

  return (
    <div className='bg-gray-50 py-10'>
      <div className='container mx-auto mt-20'>
        <h1 className='text-2xl font-bold'>
          {query ? `Search results for "${query}"` : 'All Recipes'}
        </h1>

        <SearchForm query={query} all_recipes={true} />
        <div className='relative py-16'>
          <div className='container relative m-auto px-6 text-gray-500 md:px-12'>
            <div className='grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3'>
              {allRecipes.length > 0 ? (
                allRecipes?.map((recipe) => (
                  <RecipeCard
                    key={recipe?.idMeal}
                    recipe={recipe}
                  />
                ))
              ) : (
                <p className='no-results'>No Recipes found</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal*/}
      <Modal>{/* <SingleRecipe id={recipeId} /> */}</Modal>
    </div>
  );
};

export default AllRecipes;

{
  /* <div className='bg-gray-50 min-h-screen flex items-center'>
      <div className='container mx-auto'>
        <AllRecipe />
      </div>
    </div> */
}
