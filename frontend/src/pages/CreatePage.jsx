import React, { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  return (
    <div className="min-h-screen px-8 py-24 mx-auto dark:bg-gray-900">
      <div>
        <form className="flex flex-col gap-4 max-w-2xl mx-auto">
          <h1 className=" text-black text-xl font-bold mb-4 dark:text-white">
            Create new product
          </h1>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold dark:text-white">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="py-2 px-3 font-medium border border-gray-300 text-sm rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="font-semibold dark:text-white">
              Price
            </label>
            <input
              type="text"
              placeholder="Enter product price"
              className="py-2 px-3 font-medium border border-gray-300 text-sm rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="image" className="font-semibold dark:text-white">
              Image
            </label>
            <input
              type="text"
              placeholder="Enter image URL"
              className="py-2 px-3 font-medium border border-gray-300 text-sm rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
          </div>
          <button
            type="submit"
            className="p-2 bg-black font-semibold text-white rounded dark:bg-white dark:text-black">
            Create product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
