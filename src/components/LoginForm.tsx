import React, { useEffect, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../components/context/UserContext';
import { 
  LoginContainer, 
  LoginFormWrapper, 
  LoginTitle, 
  LoginInput, 
  LoginButton, 
  LoginError 
} from './styleComponents/LoginStyles';

interface LoginFormProps {
  setHeaderTitle: (title: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setHeaderTitle }) => {
  const { login } = useUserContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    ;
  }, [setHeaderTitle]);

  const handleSubmit = async (e: FormEvent) => {
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
