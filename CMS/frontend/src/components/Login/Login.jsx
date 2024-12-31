import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { loginUser, signupUser } from '../../services/authService.jsx';

import './Login.css';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // For loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);  // Show loading spinner or disable button
    try {
      const data = await loginUser(email, password);
      login(data);  // Assuming `login` updates the context with user info
      alert('Login successful');
    } catch (error) {
      console.error(error);
      alert('Login failed');
    } finally {
      setIsLoading(false);  // Hide loading spinner or re-enable button
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
