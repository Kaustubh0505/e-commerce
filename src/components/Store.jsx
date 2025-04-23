import React, { useState } from 'react';
import "./Store.css";
import Footer from './footer/Footer';

const Store = ({ allProducts, allAccessories }) => {
  const productsShop = allProducts.concat(allAccessories);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  function handleInput(e) {
    const text = e.target.value;
    setSearchText(text);

    if (text.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const filtered = productsShop.filter(product =>
      product.brand.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  return (
    <div>
      <div className="store-page">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={handleInput}
        />
        <div className="filterproducts">
          {searchText.trim() !== "" && (
            filteredProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              filteredProducts.map((obj) => (
                <div className="store" key={obj.id}>
                  <img src={obj.image} alt={obj.name} />
                  <p>{obj.name}</p>
                  <h4>{obj.brand}</h4>
                  <p>Rs {obj.price}</p>
                </div>
              ))
            )
          )}
        </div>
      </div>
      <div className="fot">

        <Footer />
      </div>
    </div>
  );
};

export default Store;
