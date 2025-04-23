import React from 'react';
import "./Cart.css";
import Footer from './footer/Footer';

const Cart = ({ cart }) => {
    const totalPrice = cart.reduce((acc, obj) => acc + obj.price, 0)

    return (
        <div>
            <div className="cart-page">
                <h1>Your Shopping Cart</h1>
                {cart.length === 0 ? (
                    <p className="empty-cart-msg">Add Products in Cart</p>
                ) : (
                    <div className="cart-items">
                        {cart.map((obj) => (
                            <div className="cart-card" key={obj.id}>
                                <img src={obj.image} alt={obj.name} />
                                <p>{obj.name}</p>
                                <h4>{obj.brand}</h4>
                                <p>Rs {obj.price}</p>
                            </div>
                        ))}
                    </div>
                )}
                        <div className="titems">
                            <h2>Total Items are {cart.length}</h2>
                            <h2>Your Total Bill is Rs. {totalPrice}</h2>
                        </div>
            </div>
            <div className="fot">

                <Footer />
            </div>
        </div>
    );
};

export default Cart;
