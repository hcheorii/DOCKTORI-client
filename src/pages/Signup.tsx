import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';
import styled from 'styled-components';
import { SignupInfo } from '../models/user.model';
import { useAuthStore } from '../store/authStore';

export default function Signup() {
  const { userSignup } = useAuth();
  const navigate = useNavigate();
  const { isloggedIn } = useAuthStore();

  useEffect(() => {
    if (isloggedIn) navigate('/main');
  }, [isloggedIn, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInfo>();

  const onSubmit = (data: SignupInfo) => {
    userSignup(data);
  };

  return (
    <SignupContainer>
      <div className="title">독토리 회원가입</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <input
            inputMode="email"
            placeholder="이메일"
            type="email"
            autoFocus
            {...register('email', { required: true })}
          />
          {errors.email && <p className="error-text">이메일을 입력해주세요.</p>}
        </fieldset>
        <fieldset>
          <input
            inputMode="text"
            placeholder="비밀번호"
            type="password"
            {...register('password1', { required: true })}
          />
          {errors.password1 && (
            <p className="error-text">비밀번호를 입력해주세요.</p>
          )}
        </fieldset>
        <fieldset>
          <input
            inputMode="text"
            placeholder="비밀번호 확인"
            type="password"
            {...register('password2', { required: true })}
          />
          {errors.password2 && (
            <p className="error-text">비밀번호를 입력해주세요.</p>
          )}
        </fieldset>
        <fieldset>
          <input
            inputMode="text"
            placeholder="닉네임"
            type="text"
            maxLength={10}
            {...register('nickname', { required: true })}
          />
          {errors.nickname && (
            <p className="error-text">닉네임을 입력해주세요.</p>
          )}
        </fieldset>
        <fieldset>
          <button type="submit">회원가입</button>
        </fieldset>
      </form>
      <div className="info">
        <Link to="/auth/login">이미 회원이신가요?</Link>
      </div>
    </SignupContainer>
  );
}

const SignupContainer = styled.div`
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
    padding-right: 14px;
    text-align: right;
  }

  .info a {
    color: #874314;
    text-decoration: none;
  }

  .info a:hover {
    text-decoration: underline;
  }
`;
