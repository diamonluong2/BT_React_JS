import React, { useState } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import ModalDetail from "./ModalDetail";
import Cart from "./Cart";

function ShoeStore() {
  const [select, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [carts, setCarts] = useState([]);
  const handleAddtoCard = (products) => {
    const index = carts.findIndex((item) => item.id === products.id);
    if (index === -1) {
      const newProducts = { ...products, quantity: 1 };
      setCarts([...carts, newProducts]);
    } else {
      const newCarts = [...carts];
      newCarts[index].quantity += 1;
      setCarts(newCarts);
    }
  };

  const handleDelete = (productId) => {
    const newCarts = carts.filter((item) => item.id !== productId);
    setCarts(newCarts);
  };

  const handleQuantity = (productId, quantity) => {
    const newCarts = carts.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + quantity };
      }

      return item;
    });

    setCarts(newCarts);
  };
  const totalItem = carts.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const handleGetProduct = (product) => {
    setSelected(product);
  };

  return (
    <div className="container">
      <h1 className="text-center">Shoes Shop</h1>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-danger" onClick={() => setIsOpen(true)}>
          Giỏ hàng
          {totalItem > 0 && <span className="ms-2">({totalItem})</span>}
        </button>
      </div>
      <ProductList
        productsData={data}
        onAddtoCard={handleAddtoCard}
        onSelect={handleGetProduct}
      />
      <ModalDetail onSelectProduct={select} />
      <Cart
        isOpen={isOpen}
        Carts={carts}
        onClose={() => {
          setIsOpen(false);
        }}
        onDelete={handleDelete}
        onUpdateQuantity={handleQuantity}
      />
    </div>
  );
}

export default ShoeStore;
