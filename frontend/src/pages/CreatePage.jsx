import React, { useState } from "react";
import { useProductStore } from "../store/product";
import {
  AddProductSuccessNotif,
  AddProductErrorNotif,
} from "../components/notifications";
import { Link } from "react-router-dom";

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
    <div className="h-screen bg-[url('/gradient.png')] bg-cover bg-center dark:bg-[url('/dark-gradient.webp')] ">
      <div className="flex flex-col justify-center max-w-2xl mx-auto h-full ">
        <div className="divide-gray-200 border px-8 py-2 flex flex-col bg-white rounded-lg shadow dark:bg-gray-950 dark:border-slate-800 dark:divide-gray-700">
          <div className="py-5 px-3 ">
            <h1 className="text-black text-2xl font-bold dark:text-white">
              Create new product
            </h1>
          </div>

          <div className="py-5  px-3 flex flex-col gap-3">
            <div className="flex flex-col ">
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
                className="py-2 px-3 font-medium border border-gray-300 text-sm rounded dark:bg-gray-900 dark:text-white dark:border-gray-700"
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
                className="py-2 px-3 font-medium border border-gray-300 text-sm rounded dark:bg-gray-900 dark:text-white dark:border-gray-700"
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
                className="py-2 px-3 font-medium border border-gray-300 text-sm rounded dark:bg-gray-900 dark:text-white dark:border-gray-700"
              />
            </div>
          </div>

          <div className="py-5 px-3 gap-2 flex justify-end">
            <button
              onClick={handleAddProduct}
              type="submit"
              className="w-max px-3 py-2 font-semibold rounded-md text-sm dark:text-white ">
              <Link to="/">Cancel</Link>
            </button>
            <button
              onClick={handleAddProduct}
              type="submit"
              className="w-max px-3 py-2 bg-indigo-600 font-semibold text-white rounded-md text-sm dark:bg-indigo-500 ">
              Create product
            </button>
          </div>
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
