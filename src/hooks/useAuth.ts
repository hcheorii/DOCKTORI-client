// useAuth.ts 파일의 수정된 코드 예시

import { useAuthStore } from '../store/authStore';
import { useAlert } from './useAlert';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../api/auth.api';
import { User } from '../models/user.model';

export const useAuth = () => {
  const { storeLogin, storeLogout, isloggedIn } = useAuthStore();
  const { showAlert } = useAlert();
  const nav = useNavigate();

  const userLogin = (data: User) => {
    login(data).then(
      (res) => {
        // 상태 변화
        storeLogin(res.token);
        showAlert('로그인이 성공했습니다.');
        nav('/');
      },
      (error) => {
        console.log(error);
        showAlert('로그인이 실패했습니다.');
      }
    );
  };

  const userSignup = (data: User) => {
    signup(data).then(() => {
      // 성공
      showAlert('회원가입이 완료되었습니다.');
      nav('/auth/login');
    });
  };

  return {
    userSignup,
    userLogin,
  };
};
