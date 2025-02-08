import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { ConfirmProductDeleteModal } from "../components/modals";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  const { deleteProduct } = useProductStore();

  const [showDeleteSuccessNotif, setShowDeleteSuccessNotif] = useState(false);
  const [showDeleteErrorNotif, setShowDeleteErrorNotif] = useState(false);
  const [showUpdateSuccessNotif, setShowUpdateSuccessNotif] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  const handleDeleteProduct = async (id) => {
    try {
      const { success } = await deleteProduct(id);
      if (success) {
        console.log("product deleted");
        setShowDeleteSuccessNotif(true);
        setTimeout(() => setShowDeleteSuccessNotif(false), 3000);
      } else {
        console.log("error");
        setShowDeleteErrorNotif(true);
        setTimeout(() => setShowDeleteErrorNotif(false), 3000);
      }
    } catch (error) {
      setShowDeleteErrorNotif(true);
      setTimeout(() => setShowDeleteErrorNotif(false), 3000);
    }
  };

  const openDeleteModal = (id) => {
    setProductIdToDelete(id);
    setShowModal(true);
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
                  showDeleteErrorNotif={showDeleteErrorNotif}
                  setShowDeleteErrorNotif={setShowDeleteErrorNotif}
                  showDeleteSuccessNotif={showDeleteSuccessNotif}
                  setShowDeleteSuccessNotif={setShowDeleteSuccessNotif}
                  showUpdateSuccessNotif={showUpdateSuccessNotif}
                  setShowUpdateSuccessNotif={setShowUpdateSuccessNotif}
                  openDeleteModal={openDeleteModal}
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
      <ConfirmProductDeleteModal
        open={showModal}
        setOpen={setShowModal}
        handleDeleteProduct={handleDeleteProduct}
        productIdToDelete={productIdToDelete}
      />
    </div>
  );
};

export default HomePage;
