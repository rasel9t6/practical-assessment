'use client';
import RecipeCard from './RecipeCard';
import Modal from '../Modal';
import SingleRecipe from './SingleRecipe';
import SearchForm from '../SearchForm';
import { useState } from 'react';


const RecipesList = ({ recipes, query, all_recipes, heading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openRecipeModal = async (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };
  return (
    <div className='bg-gray-50 py-10'>
      <div className='container mx-auto '>
        <h1 className='text-2xl  font-bold'>
          {query ? `Search results for "${query}"` : heading}
        </h1>

        <SearchForm
          query={query}
          all_recipes={all_recipes}
        />
        <div className='relative py-16'>
          <div className='container relative m-auto px-6 text-gray-500 md:px-12'>
            <div className='grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3'>
              {recipes.length > 0 ? (
                recipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.idMeal}
                    recipe={recipe}
                    onClick={() => openRecipeModal(recipe)}
                  />
                ))
              ) : (
                <p className='no-results'>No Recipes found</p>
              )}
            </div>
            <Modal
              isOpen={isModalOpen}
              setIsOpen={setIsModalOpen}
            >
              {selectedRecipe && (
                <SingleRecipe
                  data={selectedRecipe}
                  onClose={setIsModalOpen}
                />
              )}
            </Modal>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RecipesList;
