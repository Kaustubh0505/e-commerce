import React, { useState } from 'react';
import "./Product.css";

const Product = ({ search,allProducts,cart,setCart }) => {

  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    console.log([...cart, product]);
  };

  return (
    <div className="main">
      <p className="p">Products for Men and Women</p>

      <div className="products">
        {allProducts.length > 0 ? (
          allProducts.map(product => (
            <div className="clothes" key={product.id}>
              <img src={product.image} />
              <p>{product.name}</p>
              <h4>{product.brand}</h4>
              <p>Rs {product.price}</p>
              <button onClick={() => handleAddToCart(product)}><h4>Add to Cart</h4></button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Product;