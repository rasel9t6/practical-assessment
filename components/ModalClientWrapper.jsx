'use client';
import { useState } from 'react';
import RecipeCard from './Recipes/RecipeCard';
import Modal from './Modal';
import SingleRecipe from './Recipes/SingleRecipe';

const ModalClientWrapper = ({ recipes }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [recipeId, setRecipeId] = useState('');
  const handleDetailsOpen = (id) => {
    setOpenDetails((open) => !open);
    setRecipeId(id);
  };
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          handleDetailsOpen={handleDetailsOpen}
        />
      ))}

      <Modal
        isOpen={openDetails}
        setIsOpen={setOpenDetails}
      >
        <SingleRecipe
          id={recipeId}
          setIsOpen={setOpenDetails}
        />
      </Modal>
    </>
  );
};

export default ModalClientWrapper;
