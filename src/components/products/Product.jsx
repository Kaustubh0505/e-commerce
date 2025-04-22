import React from 'react';
import "./Product.css";

const Product = ({ search }) => {
  const allProducts = [
    {
      id: 1,
      type: "clothing",
      name: "Men Navy Blue Solid Sweatshirt",
      brand: "United Colors of Benetton",
      price: 2599,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
    },
    {
      id: 2,
      type: "clothing",
      name: "Men Black MAMGP T7 Sweat Sporty Jacket",
      brand: "Puma",
      price: 2999,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg"
    },
    {
      id: 3,
      type: "clothing",
      name: "Men Black Action Parkview Lifestyle Shoes",
      brand: "Hush Puppies",
      price: 6999,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg"
    },
    {
      id: 4,
      type: "clothing",
      name: "Women Black Solid Lightweight Leather Jacket",
      brand: "BARESKIN",
      price: 9999,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg"
    },
    {
      id: 5,
      type: "clothing",
      name: "Women Blue Solid Shirt Dress",
      brand: "SASSAFRAS",
      price: 5200,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg"
    },

  ];



  return (
    <div className="main">
      <p className="p">Products for Men and Women</p>

      <div className="products">
        {allProducts.length > 0 ? (
          allProducts.map(product => (
            <div className="clothes" key={product.id}>
              <img src={product.image}/>
              <p>{product.name}</p>
              <h4>{product.brand}</h4>
              <p>Rs {product.price}</p>
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

