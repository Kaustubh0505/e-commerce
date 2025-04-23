import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { doSignOut } from '../../firebase/auth';
import './Header.css';
import './Navbar.css';

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    return (
        <div>
            {userLoggedIn && (
                <div className='navbar'>
                    <div className="ul">
                        <ul className="nav-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/store">Store</Link></li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                    <div className="butlogin">
                        <h2><Link to="/cart">Cart</Link></h2>
                        <img
                            src="https://cdn.iconscout.com/icon/free/png-512/free-cart-icon-download-in-svg-png-gif-file-formats--dripicons-pack-miscellaneous-icons-458456.png?f=webp&w=512"
                            alt="Cart Icon"
                        />
                        <button
                            onClick={() => {
                                doSignOut().then(() => {
                                    navigate('/login');
                                });
                            }}
                            className="header-link-button"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
