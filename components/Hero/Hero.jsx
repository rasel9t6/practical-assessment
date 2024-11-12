import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div>
      {/* BANNER */}
      <div className='relative bg-yellow-50 z-10'>
        <div className='container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7'>
          <div className='flex items-center justify-center px-2 md:px-0'>
            <div className='relative'>
              <div className=' relative'>
                <Image
                  src='/images/home/banner.png'
                  className='relative w-full'
                  alt='food illustration'
                  loading='lazy'
                  width={1280}
                  height={720}
                />
              </div>
            </div>
            <div className='absolute w-full  top-auto left-1/2  '>
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
              href='all-recipes'
              className='absolute text-center text-white font-semibold px-3 py-2 border-2 border-yellow-500 rounded-full bottom-12 left-1/4 lg:font-bold lg:px-8 lg:py-3 lg:bottom-36 hover:bg-yellow-500 transition-all'
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
