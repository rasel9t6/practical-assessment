import RecipesList from '@/components/Recipes/RecipesList';
import Skeleton from '@/components/Skeleton';
import { Suspense } from 'react';

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
        <Suspense fallback={<Skeleton />}>
          <RecipesList
            recipes={allRecipes}
            all_recipes={true}
            query={query}
            heading='All Recipes'
          />
        </Suspense>
      </div>
    </div>
  );
};

export default AllRecipes;
