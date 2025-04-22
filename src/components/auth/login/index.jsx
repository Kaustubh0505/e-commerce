import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../context/authContext';
import './Login.css'; 

const Login = () => {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doSignInWithEmailAndPassword(email, password);
        }
    };

    const onGoogleSignIn = (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false);
            });
        }
    };

    return (
        <div className="login-wrapper">
            {userLoggedIn && <Navigate to="/home" replace={true} />}

            <main className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <h3>Welcome Back</h3>
                    </div>

                    <form onSubmit={onSubmit} className="login-form">
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {errorMessage && (
                            <span className="error-message">{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className="login-button"
                        >
                            {isSigningIn ? 'Signing In...' : 'Log In'}
                        </button>
                    </form>

                    <p className="signup-text">
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </p>

                    <div className="divider">
                        <div className="line"></div>
                        <div className="or-text">OR</div>
                        <div className="line"></div>
                    </div>

                    <button
                        disabled={isSigningIn}
                        onClick={onGoogleSignIn}
                        className="google-button"
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" className="google-icon" />
                        {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;
