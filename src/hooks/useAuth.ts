import { useAuthStore } from '../store/authStore';
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

  const handleApiCall = async <T>(
    apiCall: () => Promise<T>,
    successMessage: string | null,
    errorMessage: string,
    callback?: (res: T) => void
  ) => {
    try {
      const res = await apiCall();
      if (callback) callback(res);
    } catch (error: any) {
      console.log(error);
      showAlert(error.response?.data?.message || errorMessage);
    }
  };

  const userLogin = async (data: User) => {
    await handleApiCall(
      () => login(data),
      '로그인이 성공했습니다.',
      '로그인 중 오류가 발생했습니다.',
      (res) => {
        storeLogin(res.accessToken);
        nav('/main');
      }
    );
  };

  const userSignup = async (data: SignupInfo) => {
    await handleApiCall(
      () => signup(data),
      '회원가입이 완료되었습니다.',
      '회원가입 중 오류가 발생했습니다.',
      () => nav('/auth/login')
    );
  };

  const userLogout = async () => {
    await handleApiCall(
      () => logout(),
      null,
      '로그아웃 중 오류가 발생했습니다.',
      () => {
        storeLogout();
        nav('/auth/login');
      }
    );
  };

  const userChangePassword = async (data: UserChangePassword) => {
    await handleApiCall(
      () => changepassword(data),
      '비밀번호 변경이 완료되었습니다.\n다시 로그인 하세요.',
      '비밀번호 변경 중 오류가 발생했습니다.',
      () => {
        localStorage.removeItem('token');
        nav('/auth/login');
      }
    );
  };

  const userWithdrawal = async () => {
    await handleApiCall(
      () => withdrawal(),
      null,
      '회원탈퇴 중 오류가 발생했습니다.',
      () => {
        localStorage.removeItem('token');
        storeLogout();
        nav('/auth/login');
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
