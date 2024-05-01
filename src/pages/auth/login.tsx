import React, { useState } from 'react';
import axios from 'axios';
import AuthRoutes from '../../routes/AuthRoutes';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const api = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
    });

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8000/auth/user/login", {
                email,
                password,
            });
            console.log('Login response:', response);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type='text'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;