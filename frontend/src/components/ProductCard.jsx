import React, { useState } from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import {
  DeleteProductErrorNotif,
  DeleteProductSuccessNotif,
  UpdateProductSuccessNotif,
} from "./notifications";
import { EditProductModal } from "./modals";

const ProductCard = ({
  product,
  showDeleteErrorNotif,
  setShowDeleteErrorNotif,
  showDeleteSuccessNotif,
  setShowDeleteSuccessNotif,
  showUpdateSuccessNotif,
  setShowUpdateSuccessNotif,
  openDeleteModal,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);

  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md dark:border dark:border-slate-800">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-48 object-cover rounded-md"
      />
      <h1 className="mt-2 text-lg font-normal text-gray-900 dark:text-white">
        {product.name}
      </h1>
      <div className="flex items-center justify-between mt-2">
        <p className="text-xl font-semibold dark:text-white">
          ${product.price}
        </p>
        <div className="flex gap-2">
          <PencilSquareIcon
            onClick={() => setShowModal(true)}
            className="size-5 text-black-500 cursor-pointer dark:text-white"
          />
          <TrashIcon
            onClick={() => openDeleteModal(product._id)}
            className="size-5 text-red-500 cursor-pointer"
          />
        </div>
      </div>
      <DeleteProductSuccessNotif
        show={showDeleteSuccessNotif}
        onClose={() => setShowDeleteSuccessNotif(false)}
      />
      <DeleteProductErrorNotif
        show={showDeleteErrorNotif}
        onClose={() => setShowDeleteErrorNotif(false)}
      />
      <UpdateProductSuccessNotif
        show={showUpdateSuccessNotif}
        onClose={() => setShowUpdateSuccessNotif(false)}
      />
      <EditProductModal
        product={product}
        updatedProduct={updatedProduct}
        setUpdatedProduct={setUpdatedProduct}
        open={showModal}
        setOpen={setShowModal}
        showUpdateSuccessNotif={showUpdateSuccessNotif}
        setShowUpdateSuccessNotif={setShowUpdateSuccessNotif}
      />
    </div>
  );
};

export default ProductCard;
