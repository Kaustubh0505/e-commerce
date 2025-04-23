import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
// import './Home.css';
import Slides from '../slides/Slides';
import Product from '../products/Product';
import Footer from '../footer/Footer';
import Accessories from '../products/Accessories';

const Home = ({allProducts,allAccessories,cart,setCart}) => {
    const { currentUser } = useAuth();

    return (
        <div className="home-container">
            <Slides />
            <Product allProducts={allProducts} cart={cart} setCart={setCart}   />
            <Accessories allAccessories={allAccessories} cartA={cart} setCartA={setCart} />
            <Footer />
        </div>
    );
};

export default Home;
