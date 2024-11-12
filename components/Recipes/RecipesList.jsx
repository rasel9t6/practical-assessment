import RecipeCard from './RecipeCard';
import Modal from '../Modal';
import SingleRecipe from './SingleRecipe';
import SearchForm from '../SearchForm';
import ModalClientWrapper from '../ModalClientWrapper';

const RecipesList = async ({ topRecipes, query }) => {
  const id = topRecipes.map((recipe) => recipe?.idMeal);
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
              <ModalClientWrapper recipes={topRecipes} />
            </div>
          </div>
        </div>
      </div>

      {/* Modal
      <Modal>
        <SingleRecipe id={id} />
      </Modal> */}
    </div>
  );
};

export default RecipesList;
