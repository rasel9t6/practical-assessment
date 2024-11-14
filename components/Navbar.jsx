'use client';
import Link from 'next/link';

import React, { useEffect, useState, useRef } from 'react';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const toggleNavRef = useRef(null);

  useEffect(() => {
    const getUser = () => {
      const usersData = localStorage.getItem('users');
      if (usersData) {
        return JSON.parse(usersData);
      }
      return null;
    };

    const storedUser = getUser();
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('users');
    setUser(null);
  };

  const closeNavbar = () => {
    if (toggleNavRef.current) {
      toggleNavRef.current.checked = false;
    }
  };

  return (
    <nav className='fixed z-50 w-full bg-white md:absolute md:bg-transparent'>
      <div className='container m-auto px-2 md:px-12 lg:px-7'>
        <div className='flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0'>
          <input
            type='checkbox'
            name='toggle_nav'
            id='toggle_nav'
            className='peer hidden'
            ref={toggleNavRef}
          />
          <div className='w-full px-6 flex justify-between lg:w-max md:px-0 z-30'>
            <Link
              href='/'
              aria-label='Tailus Feedus home page'
              title='Go to home page'
              className='flex space-x-2 items-center'
              onClick={closeNavbar}
            >
              <span className='text-2xl font-bold text-yellow-900'>
                Tailus <span className='text-yellow-700'>Feedus</span>
              </span>
            </Link>

            <div className='flex items-center lg:hidden max-h-10'>
              <label
                role='button'
                htmlFor='toggle_nav'
                aria-label='hamburger'
                id='hamburger'
                className='relative w-10 h-auto p-2'
              >
                <div
                  id='line'
                  className='m-auto h-0.5 w-6 rounded bg-yellow-900 transition duration-300'
                ></div>
                <div
                  id='line2'
                  className='m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900 transition duration-300'
                ></div>
              </label>
            </div>
          </div>

          <label
            role='button'
            htmlFor='toggle_nav'
            className='hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-yellow-200 bg-opacity-30 backdrop-blur backdrop-filter'
          ></label>
          <div className='hidden peer-checked:flex w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-7/12'>
            <div className='text-gray-600 lg:pr-4 w-full'>
              <ul className='tracking-wide font-medium text-sm flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full'>
                <li>
                  <Link
                    aria-label='All recipes'
                    href='/all-recipes'
                    title='All Recipes'
                    className='block md:px-4 transition hover:text-yellow-700'
                    onClick={closeNavbar}
                  >
                    <span>All recipes</span>
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label='Go to cart page'
                    href='/cart'
                    title='Cart list'
                    className='block md:px-4 transition hover:text-yellow-700'
                    onClick={closeNavbar}
                  >
                    <span>Cart</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className='w-full min-w-max space-y-2 border-yellow-200 lg:space-y-0 sm:w-max lg:border-l'>
              {user ? (
                <button
                  onClick={() => {
                    handleLogout();
                    closeNavbar();
                  }}
                  className='w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max'
                >
                  <span className='text-yellow-900 font-semibold text-sm'>
                    Logout
                  </span>
                </button>
              ) : (
                <>
                  <Link
                    href='/signup'
                    title='Sign up'
                    className='w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max'
                    onClick={closeNavbar}
                  >
                    <span className='text-yellow-800 font-semibold text-sm'>
                      Sign up
                    </span>
                  </Link>
                  <Link
                    href='/login'
                    title='Login'
                    className='w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max'
                    onClick={closeNavbar}
                  >
                    <span className='text-yellow-900 font-semibold text-sm'>
                      Login
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
