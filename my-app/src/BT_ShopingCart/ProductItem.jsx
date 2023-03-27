import React from "react";

function ProductItem({ product, onAddtoCards, onSelect }) {
  return (
    <div className="Card mb-5">
      <img
        src={product.image}
        alt={product.name}
        height="350px"
        className="card-image"
        onClick={() => onSelect(product)}
        type="button"
      ></img>
      <div className="card-body mt-4">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text text-muted">{product.price}</p>
        <button onClick={() => onAddtoCards(product)}>Add to carts</button>
        {/* <button onClick={() => onSelect(product)}>Xem chi tiết</button> */}
      </div>
    </div>
  );
}

export default ProductItem;
