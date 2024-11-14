import {
  getUsersFromLocalStorage,
  saveUsersToLocalStorage,
} from '@/utils/auth-user';
import { X } from 'lucide-react';
import Image from 'next/image';
import toast from 'react-hot-toast';

const SingleRecipe = ({ data, onClose }) => {
  const handleAddToCart = () => {
     const currentUser = getUsersFromLocalStorage();
  const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

  if (currentUser && currentUser.cart) {
    const userCart = currentUser.cart || [];

    // Check if the item is already in the user's cart
    if (userCart.some((item) => item.idMeal === data.idMeal)) {
      toast.warn('Recipe already in your account cart');
    } else {
      const mergedCart = [
        ...userCart,
        ...currentCart.filter((item) =>
          userCart.every((userItem) => userItem.idMeal !== item.idMeal)
        ),
      ];
      mergedCart.push(data); 

      currentUser.cart = mergedCart;
      saveUsersToLocalStorage(currentUser);

      // Clear the guest cart after merging
      localStorage.removeItem('cart');
      toast.success('Recipe added to your account cart');
    }
  } else {
    if (currentCart.some((item) => item.idMeal === data.idMeal)) {
      toast.warn('Recipe already in guest cart');
    } else {
      localStorage.setItem('cart', JSON.stringify([...currentCart, data]));
      toast.success('Recipe added to guest cart');
    }
  }

  onClose(false);
};
 
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-end'>
        <button
          aria-label='Close'
          title='Close'
          onClick={() => onClose(false)}
        >
          <X className='size-8 border border-red-500  rounded-full p-1' />
        </button>
      </div>
      <div>
        <Image
          src={data.strMealThumb}
          width={500}
          height={500}
          alt={data.strMeal || 'Recipe Image'}
        />
      </div>
      <h2 className='text-2xl font-semibold'>{data.strMeal}</h2>
      <div className='flex justify-center'>
        <button
          type='button'
          title='Add recipe to your cart'
          onClick={handleAddToCart}
          className='w-full font-bold py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleRecipe;
