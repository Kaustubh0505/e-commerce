import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import './Home.css';
import Slides from '../slides/Slides';
import Product from '../products/Product';
import Footer from '../footer/Footer';
import Accessories from '../products/Accessories';

const Home = () => {
    const { currentUser } = useAuth();

    return (
        <div className="home-container">
            <Slides />
            <Product  />
            <Accessories />
            <Footer />
        </div>
    );
};

export default Home;
