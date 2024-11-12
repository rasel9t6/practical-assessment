import Modal from '../Modal';
import SearchForm from '../SearchForm';
import RecipeCard from './RecipeCard';
import SingleRecipe from './SingleRecipe';

export default async function AllRecipes() {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recipes/getAllRecipes`
  );
  const allRecipes = await response.json();
  const recipeId = allRecipes.map((recipe) => recipe.idMeal);
  console.log(allRecipes);

  return (
    <div className='bg-gray-50 py-10'>
      <div className='container mx-auto mt-20'>
        <h1 className='text-2xl font-bold'>
          {query ? `Search results for "${query}"` : 'All Recipes'}
        </h1>

        <SearchForm query={query} />
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
      <Modal>
        <SingleRecipe id={recipeId} />
      </Modal>
    </div>
  );
}
