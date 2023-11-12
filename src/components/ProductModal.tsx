import React from "react";
import Item from "../types/types";

type ProductModalProps = {
  product: Item | null;
  onClose: () => void;
};

function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <p>Price: {product?.price}</p>
        <img src={product?.thumbnail} alt={product?.title} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ProductModal;