import React from 'react';
import axios from 'axios';
import AuthRoutes from '../../routes/AuthRoutes';
import './login.css';
import { getAppURL } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {

    const api = axios.create();

    const navigate = useNavigate();

    const handleLogin = async () => {
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        const subdomain = getAppURL();

        try {
            const response = await AuthRoutes(api).login({ email, password, subdomain });

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('tenant', response.data.tenant);

            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }



    const toggleShowOrHidePassword = () => {
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    }

    return (
        <>
            <div className="page page-center">
                <div className="container container-tight py-4">
                    <div className="text-center mb-4">
                        <a href="." className="navbar-brand navbar-brand-autodark">
                            <img src="./assets/static/logo.svg" height={36} alt="" />
                        </a>
                    </div>
                    <div className="card card-md">
                        <div className="card-body">
                            <h2 className="h2 text-center mb-4">Login to your account</h2>
                            <div className="mb-3">
                                <label className="form-label text-start">Email address</label>
                                <input
                                    type="email" id='email'
                                    className="form-control"
                                    placeholder="your@email.com"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label text-start">
                                    Password
                                    <span className="form-label-description">
                                        <a href="./forgot-password.html">I forgot password</a>
                                    </span>
                                </label>
                                <div className="input-group input-group-flat">
                                    <input
                                        type="password" id='password'
                                        className="form-control"
                                        placeholder="Your password"
                                        autoComplete="off"
                                    />
                                    <span className="input-group-text">
                                        <a
                                            onClick={toggleShowOrHidePassword}
                                            href='.'
                                            className="link-secondary ps-2 pe-0"
                                            title="Show password"
                                            data-bs-toggle="tooltip"
                                        >
                                            {/* Download SVG icon from http://tabler-icons.io/i/eye */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="mb-2 text-start">
                                <label className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <span className="form-check-label">
                                        Remember me on this device
                                    </span>
                                </label>
                            </div>
                            <div className="form-footer">
                                <button onClick={handleLogin} className="btn btn-primary w-100">
                                    Sign in
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>


    );
}

export default Login;