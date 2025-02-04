import React, { useState } from "react";
import { useProductStore } from "../store/product";
import {
  AddProductSuccessNotif,
  AddProductErrorNotif,
} from "../components/notifications";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const [showSuccessNotif, setShowSuccessNotif] = useState(false);
  const [showErrorNotif, setShowErrorNotif] = useState(false);

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success } = await createProduct(newProduct);
    if (success) {
      setShowSuccessNotif(true);
    } else {
      setShowErrorNotif(true);
    }

    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <div className="h-screen dark:bg-gray-900">
      <div className="flex flex-col justify-center max-w-2xl mx-auto h-full ">
        <div className="border-t-[8px] border-black flex flex-col gap-4 p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-black text-xl font-bold mb-4 dark:text-white">
            Create new product
          </h1>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold dark:text-white">
              Name
            </label>
            <input
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
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
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
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
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              type="text"
              placeholder="Enter image URL"
              className="py-2 px-3 font-medium border border-gray-300 text-sm rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
          </div>
          <button
            onClick={handleAddProduct}
            type="submit"
            className="p-2 bg-black font-semibold text-white rounded-full dark:bg-gray-700 ">
            Create product
          </button>
        </div>
      </div>
      <AddProductSuccessNotif
        show={showSuccessNotif}
        onClose={() => setShowSuccessNotif(false)}
      />
      <AddProductErrorNotif
        show={showErrorNotif}
        onClose={() => setShowErrorNotif(false)}
      />
    </div>
  );
};

export default CreatePage;
