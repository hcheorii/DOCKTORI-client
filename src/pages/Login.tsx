// src/pages/Login.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';
import styled from 'styled-components';
import AuthLayout from '../components/layout/AuthLayout/AuthLayout';

export interface LoginProps {
  email: string;
  password: string;
}

function Login() {
  const { userLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit = (data: LoginProps) => {
    userLogin(data);
  };

  return (
    <LoginContainer>
      <div className='title'>🐿 독토리 로그인</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <input
            inputMode='email'
            placeholder='이메일'
            type='email'
            {...register('email', { required: true })}
          />
          {errors.email && <p className='error-text'>이메일을 입력해주세요.</p>}
        </fieldset>
        <fieldset>
          <input
            inputMode='text'
            placeholder='비밀번호'
            type='password'
            {...register('password', { required: true })}
          />
          {errors.password && (
            <p className='error-text'>비밀번호를 입력해주세요.</p>
          )}
        </fieldset>
        <fieldset>
          <button type='submit'>로그인</button>
        </fieldset>
      </form>
      <div className='info'>
        <Link to='/reset'>비밀번호 초기화</Link>
        <Link to='/signup'>회원가입</Link>
      </div>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 80%;
  max-width: 400px;
  text-align: center;

  .title {
    font-size: 1.5rem;
    margin: 15px 0;
  }

  form {
    width: 100%;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    border: none;
  }

  input {
    padding: 15px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    background-color: #874314;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    background-color: #872314;
  }

  .error-text {
    color: red;
    font-size: 12px;
    margin: 0;
    text-align: left;
  }

  .info {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .info a {
    color: #874314;
    text-decoration: none;
  }

  .info a:hover {
    text-decoration: underline;
  }
`;

export default Login;
