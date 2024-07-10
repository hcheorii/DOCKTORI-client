import { removeToken, useAuthStore } from '../store/authStore';
import { useAlert } from './useAlert';
import { useNavigate } from 'react-router-dom';
import {
  changepassword,
  login,
  logout,
  signup,
  withdrawal,
} from '../api/auth.api';
import { SignupInfo, User, UserChangePassword } from '../models/user.model';

export const useAuth = () => {
  const { storeLogin, storeLogout } = useAuthStore();
  const { showAlert } = useAlert();
  const nav = useNavigate();

  const userLogin = (data: User) => {
    login(data).then(
      (res) => {
        storeLogin(res.accessToken);
        showAlert('로그인이 성공했습니다.');
        nav('/main');
      },
      (error) => {
        console.log(error);
        showAlert(
          error.response?.data?.message || '로그인 중 오류가 발생했습니다.'
        );
      }
    );
  };

  const userSignup = (data: SignupInfo) => {
    signup(data).then(
      () => {
        showAlert('회원가입이 완료되었습니다.');
        nav('/auth/login');
      },
      (error) => {
        console.log(error);
        showAlert(
          error.response?.data?.message || '회원가입 중 오류가 발생했습니다.'
        );
      }
    );
  };

  const userLogout = () => {
    logout().then(
      () => {
        storeLogout();
        nav('/auth/login');
      },
      (error) => {
        console.log(error);
        showAlert(error.message || '로그아웃 중 오류가 발생했습니다.');
      }
    );
  };

  const userChangePassword = (data: UserChangePassword) => {
    changepassword(data).then(
      () => {
        showAlert('비밀번호 변경이 완료되었습니다.\n다시 로그인 하세요.');
        localStorage.removeItem('token');
        nav('/auth/login');
      },
      (error) => {
        console.log(error);
        showAlert(
          error.response?.data?.message ||
            '비밀번호 변경 중 오류가 발생했습니다.'
        );
      }
    );
  };

  const userWithdrawal = (token: string) => {
    withdrawal().then(
      () => {
        localStorage.removeItem('token');
        storeLogout();
        nav('/auth/login');
      },
      (error) => {
        console.log(error);
        showAlert(
          error.response?.data?.message || '회원탈퇴 중 오류가 발생했습니다.'
        );
      }
    );
  };

  return {
    userSignup,
    userLogin,
    userChangePassword,
    userWithdrawal,
    userLogout,
  };
};
