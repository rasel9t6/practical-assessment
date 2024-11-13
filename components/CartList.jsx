'use client';
import { useEffect, useState } from 'react';
import RecipeCard from './Recipes/RecipeCard';

export default function CartList() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCartData = () => {
      const cartData = localStorage.getItem('cart');
      if (cartData) {
        return JSON.parse(cartData);
      } else {
        const usersData = localStorage.getItem('users');
        if (usersData) {
          const parsedUsers = JSON.parse(usersData);
          return parsedUsers.cart || [];
        }
        return [];
      }
    };

    setCart(getCartData());
  }, []);

  return (
    <div className='bg-gray-50 h-screen py-10'>
      <div className='container mx-auto '>
        <h1 className='text-2xl  font-bold'>Your cart list</h1>
        <div className='relative py-16'>
          <div className='container relative m-auto px-6 text-gray-500 md:px-12'>
            <div className='grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3'>
              {cart.length > 0 ? (
                cart.map((recipe) => (
                  <RecipeCard
                    key={recipe.idMeal}
                    recipe={recipe}
                    onClick={() => {}}
                  />
                ))
              ) : (
                <p className='text-lg'>⛔No Recipes found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
