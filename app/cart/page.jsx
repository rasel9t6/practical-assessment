import CartList from '@/components/CartList';
import SingleRecipe from '@/components/Recipes/SingleRecipe';
import React from 'react';

const Cart = () => {
  return (
    <div className='bg-gray-50 py-10'>
      <div className='container mx-auto mt-20'>
        <CartList />
      </div>
    </div>
  );
};

export default Cart;
