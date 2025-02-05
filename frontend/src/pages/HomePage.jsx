import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <div className="h-screen bg-[url('/gradient.png')] bg-cover bg-center dark:bg-[url('/dark-gradient.webp')] ">
      <div className="flex flex-col justify-center max-w-2xl mx-auto h-full ">
        <div className="grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
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
      </div>
    </div>
  );
};

export default HomePage;
