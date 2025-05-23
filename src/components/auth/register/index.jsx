import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/authContext'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'
import './Register.css' 

const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main className="register-main">
                <div className="register-container">
                    <div className="register-header">
                        <h3>Create a New Account</h3>
                    </div>
                    <form onSubmit={onSubmit} className="register-form">
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isRegistering}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isRegistering}
                            />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                autoComplete="off"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                disabled={isRegistering}
                            />
                        </div>

                        {errorMessage && (
                            <span className="error-message">{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isRegistering}
                            className="submit-button"
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>

                        <div className="login-link">
                            Already have an account? <Link to={'/login'}>Continue</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Register
