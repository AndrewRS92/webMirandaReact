import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import { 
  LoginContainer, 
  LoginFormWrapper, 
  LoginTitle, 
  LoginInput, 
  LoginButton, 
  LoginError 
} from './styleComponents/LoginStyles';

const LoginForm = ({ setHeaderTitle }) => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setHeaderTitle('Login');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (!success) {
      setError('Invalid email or password');
    } else {
      setError('');
      navigate('/');
    }
  };

  return (
    <LoginContainer>
      <LoginFormWrapper onSubmit={handleSubmit}>
        <LoginTitle>Login</LoginTitle>
        <LoginInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <LoginInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <LoginButton type="submit">Login</LoginButton>
        {error && <LoginError>{error}</LoginError>}
      </LoginFormWrapper>
    </LoginContainer>
  );
};

export default LoginForm;
