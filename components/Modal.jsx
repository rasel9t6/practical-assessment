"use client";
import React, { Fragment, useState } from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import SingleRecipe from "./Recipes/SingleRecipe";

const Modal = ({children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Transition
      show={isOpen}
      as={Fragment}
    >
      <Dialog
        as='div'
        className='relative z-100'
        onClose={(open) => setIsOpen(!open)}
      >
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-50'
          leave='ease-in duration-200'
          leaveFrom='opacity-50'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' />
        </TransitionChild>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          {console.log(children)}
          <div
            onClick={(e) => e.stopPropagation()}
            className='flex items-center justify-center min-h-full p-4 text-center sm:items-center sm:p-0'
          >
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <DialogPanel className='w-full px-4 py-4 mx-4 text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                <SingleRecipe />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
