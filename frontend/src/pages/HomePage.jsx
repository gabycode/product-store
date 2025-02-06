import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  const { deleteProduct } = useProductStore();

  const [showSuccessNotif, setShowSuccessNotif] = useState(false);
  const [showErrorNotif, setShowErrorNotif] = useState(false);

  const handleDeleteProduct = async (id) => {
    try {
      const { success } = await deleteProduct(id);
      if (success) {
        console.log("product deleted");
        setShowSuccessNotif(true);
        setTimeout(() => setShowSuccessNotif(false), 3000);
      } else {
        console.log("error");
        setShowErrorNotif(true);
        setTimeout(() => setShowErrorNotif(false), 3000);
      }
    } catch (error) {
      setShowErrorNotif(true);
      setTimeout(() => setShowErrorNotif(false), 3000);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <div className="min-h-screen flex items-center bg-[url('/gradient.png')] bg-cover bg-center dark:bg-[url('/dark-gradient.webp')] py-20  md:py-24">
      <div className="flex flex-col justify-center max-w-7xl mx-auto h-full ">
        {products.length > 0 ? (
          <>
            <h1 className="text-center my-10 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl  dark:text-white">
              Product catalog
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  showErrorNotif={showErrorNotif}
                  setShowErrorNotif={setShowErrorNotif}
                  showSuccessNotif={showSuccessNotif}
                  setShowSuccessNotif={setShowSuccessNotif}
                  handleDeleteProduct={handleDeleteProduct}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 ">
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl  dark:text-white">
              No products found.{" "}
            </h1>
            <p class="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Sorry, we couldn’t find any products.
            </p>
            <Link
              to="/create"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 w-max">
              Create one
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
