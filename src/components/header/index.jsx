import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import { doSignOut } from '../../firebase/auth'
import './Header.css'
import './Navbar.css';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userLoggedIn } = useAuth();

    const hideHeaderLinks = location.pathname === '/login' || location.pathname === '/register';

    return (
        <div>
            {
                userLoggedIn ? (
                    <div className='navbar'>
                        <div className="ul">
                            <ul className="nav-list">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/store">Store</Link></li>
                                <li>Accessories</li>
                            </ul>
                        </div>
                        <div className="butlogin">
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
                ) : (
                    !hideHeaderLinks && (
                        <div className="header-link">
                            <Link to="/login"><p>Login</p></Link>
                            <Link to="/register"><p>Register</p></Link>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Header;
