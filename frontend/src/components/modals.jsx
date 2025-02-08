import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import {
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useProductStore } from "../store/product";
import { set } from "mongoose";

export function ProductCreatedModal() {
  const [open, setOpen] = useState(true);
  const { darkMode } = useTheme();

  return (
    <Dialog
      open={open}
      onClose={setOpen}
      className={`relative z-10 ${darkMode ? "dark" : ""}`}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 dark:bg-gray-900 ">
            <div>
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                <CheckIcon
                  aria-hidden="true"
                  className="size-6 text-green-600"
                />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle
                  as="h3"
                  className="text-base font-semibold text-gray-900 dark:text-white">
                  Product created!
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Thank you for creating a new product. Your product has been
                    successfully created.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ">
                Go back to products
              </Link>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export function ConfirmProductDeleteModal({
  open,
  setOpen,
  handleDeleteProduct,
  productIdToDelete,
}) {
  const { darkMode } = useTheme();

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className={`relative z-10 ${darkMode ? "dark" : ""}`}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 dark:bg-gray-900 ">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                <ExclamationTriangleIcon
                  aria-hidden="true"
                  className="size-6 text-red-600"
                />
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle
                  as="h3"
                  className="text-base font-semibold text-gray-900 dark:text-white">
                  Delete product
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product? This action
                    cannot be undone.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={() => {
                  handleDeleteProduct(productIdToDelete);
                  setOpen(!open);
                }}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                Delete
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(!open)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export function EditProductModal({
  product,
  updatedProduct,
  setUpdatedProduct,
  open,
  setOpen,
  showUpdatedSuccessNotif,
  setShowUpdateSuccessNotif,
}) {
  const { updateProduct } = useProductStore();
  const { darkMode } = useTheme();

  const handleUpdateProduct = async (id, updatedProduct) => {
    const { success, message } = await updateProduct(id, updatedProduct);
    if (success) {
      setOpen(false);
      setShowUpdateSuccessNotif(true);
    } else {
      console.error("Error while updating product", message);
    }
  };
  return (
    <Dialog
      open={open}
      onClose={setOpen}
      className={`relative z-10 ${darkMode ? "dark" : ""}`}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 dark:bg-gray-900 ">
            <div className="text-center">
              <DialogTitle
                as="h3"
                className="text-xl font-semibold text-gray-900 dark:text-white">
                Edit product
              </DialogTitle>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Adjust name, pricing and image as needed.
                </p>
              </div>
            </div>

            <div className="py-5  px-3 flex flex-col gap-3">
              <div className="flex flex-col ">
                <label htmlFor="name" className="font-semibold dark:text-white">
                  Name
                </label>
                <input
                  value={updatedProduct.name}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Enter product name"
                  className="py-2 px-3 font-medium border border-gray-300 text-sm rounded dark:bg-gray-900 dark:text-white dark:border-gray-700"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="price"
                  className="font-semibold dark:text-white">
                  Price
                </label>
                <input
                  value={updatedProduct.price}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Enter product price"
                  className="py-2 px-3 font-medium border border-gray-300 text-sm rounded dark:bg-gray-900 dark:text-white dark:border-gray-700"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="image"
                  className="font-semibold dark:text-white">
                  Image
                </label>
                <input
                  value={updatedProduct.image}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      image: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Enter image URL"
                  className="py-2 px-3 font-medium border border-gray-300 text-sm rounded dark:bg-gray-900 dark:text-white dark:border-gray-700"
                />
              </div>
            </div>

            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                onClick={() => {
                  handleUpdateProduct(product._id, updatedProduct);
                }}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2">
                Save changes
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0">
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
