import RecipeCard from './RecipeCard';
import Modal from '../Modal';
import SingleRecipe from './SingleRecipe';
import SearchForm from '../SearchForm';

const RecipesList = async ({ topRecipes, query }) => {
  return (
    <div className='bg-gray-50 py-10'>
      <div className='container mx-auto mt-20'>
        <h1 className='text-2xl font-bold'>
          {query ? `Search results for "${query}"` : 'Top Recipes'}
        </h1>

        <SearchForm
          query={query}
          all_recipes={false}
        />
        <div className='relative py-16'>
          <div className='container relative m-auto px-6 text-gray-500 md:px-12'>
            <div className='grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3'>
              {topRecipes.length > 0 ? (
                topRecipes?.map((recipe) => (
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

export default RecipesList;
