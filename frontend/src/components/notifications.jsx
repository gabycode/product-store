"use client";

import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";

export function AddProductSuccessNotif({ show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <Transition
      show={show}
      enter="transition ease-out duration-300"
      enterFrom="opacity-0 translate-y-2"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-2">
      <div className="fixed inset-0 flex items-end px-4 py-6 sm:p-6 pointer-events-none">
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 dark:bg-gray-800">
            <div className="p-4 flex items-start">
              <CheckCircleIcon
                className="size-6 text-green-400"
                aria-hidden="true"
              />
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Product created!
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  You have successfully created a product.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="ml-4 flex shrink-0 bg-white text-gray-400 rounded-md hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                <XMarkIcon className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export function AddProductErrorNotif({ show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <Transition
      show={show}
      enter="transition ease-out duration-300"
      enterFrom="opacity-0 translate-y-2"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-2">
      <div className="fixed inset-0 flex items-end px-4 py-6 sm:p-6 pointer-events-none">
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 dark:bg-gray-800">
            <div className="p-4 flex items-start">
              <XCircleIcon className="size-6 text-red-400" aria-hidden="true" />
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Error creating product!
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Review fields and try again.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="ml-4 flex shrink-0 bg-white text-gray-400 rounded-md hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                <XMarkIcon className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
