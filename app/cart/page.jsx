import CartList from '@/components/CartList';
import SingleRecipe from '@/components/Recipes/SingleRecipe';
import Skeleton from '@/components/Skeleton';
import React, { Suspense } from 'react';

const Cart = () => {
  return (
    <div className='bg-gray-50 py-10'>
      <div className='container mx-auto mt-20'>
        <Suspense fallback={<Skeleton />}>
          <CartList />
        </Suspense>
      </div>
    </div>
  );
};

export default Cart;
