import React, { Suspense } from 'react';
import Hero from '../components/Hero/Hero';
import Skeleton from '@/components/Skeleton';
const RecipesList = React.lazy(() =>
  import('@/components/Recipes/RecipesList')
);
export default async function Home({ searchParams }) {
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
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recipes/getTopRecipes`
    );
  }
  const topRecipes = await response.json();
  return (
    <div>
      <Hero />
      <Suspense fallback={<Skeleton />}>
        <RecipesList
          recipes={topRecipes}
          query={query}
          all_recipes={false}
          heading='Top Recipes'
        />
      </Suspense>
    </div>
  );
}
