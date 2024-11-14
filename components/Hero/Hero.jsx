import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div>
      {/* BANNER */}
      <div className='relative bg-yellow-50 z-10'>
        <div className='container m-auto px-6 pt-14 md:px-12 lg:pt-[4.8rem] lg:px-7'>
          <div className='flex items-center justify-center px-2 md:px-0'>
            <div className='relative'>
              <Image
                src='/images/home/banner.png'
                className='w-full'
                alt='food illustration'
                width={1280}
                height={720}
                priority
              />
            </div>
            <div className='absolute w-32 md:w-60 lg:w-full top-auto left-1/2  '>
              <Image
                src='/images/home/pizza.png'
                className='relative lg:w-1/4 animate-spin'
                alt='food illustration'
                loading='lazy'
                width={250}
                height={80}
                unoptimized
              />
            </div>
            <Link
              aria-label='Find Your Next Meal'
              href='/all-recipes'
              className='absolute hidden md:block text-center text-white text-sm font-semibold px-2 py-2.5 border-2 border-yellow-500 rounded-full left-1/4 bottom-3 md:bottom-12 md:left-1/4 lg:font-bold lg:px-8 lg:py-3 lg:bottom-36 transition-all hover:bg-yellow-500'
            >
              Find Your Next Meal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
