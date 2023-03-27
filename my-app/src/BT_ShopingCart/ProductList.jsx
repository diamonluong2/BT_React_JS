import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ productsData, onAddtoCard, onSelect }) {
  const handleAddtoCard = (product) => {
    onAddtoCard(product);
  };
  const onSelectedProduct = (product) => {
    onSelect(product);
  };

  return (
    <div className="row">
      {productsData.map((product) => {
        return (
          <div className="col-4" key={product.id}>
            <ProductItem
              product={product}
              onAddtoCards={handleAddtoCard}
              onSelect={onSelectedProduct}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
