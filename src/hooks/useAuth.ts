import { useAuthStore } from '../store/authStore';
import { useAlert } from './useAlert';
import { useNavigate } from 'react-router-dom';
import {
  changeNickname,
  changepassword,
  login,
  logout,
  signup,
  withdrawal,
} from '../api/auth.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  ChangeNickNameProps,
  ChangeNickNameResponse, // ChangeNickNameResponse를 import합니다.
  SignupInfo,
  User,
  UserChangePassword,
} from '../models/user.model';
import { useState } from 'react';
import { fetchMainResponse } from '../models/main.model';
import { fetchMain } from '../api/main.api';
import { BookListItem } from '../models/book.model';

export const useAuth = () => {
  const {
    storeLogin,
    storeLogout,
    userNickname,
    userGoal,
    fetchAndSetNickname,
    fetchAndSetGoal,
  } = useAuthStore();
  const { showAlert } = useAlert();
  const nav = useNavigate();
  const queryClient = useQueryClient();

  const [bookReading, setBookReading] = useState<BookListItem[]>([]);
  const [bookFinished, setBookFinished] = useState<BookListItem[]>([]);
  const [bookFinishedCount, setBookFinishedCount] = useState<number>(0);
  const [bookReadingCount, setBookReadingCount] = useState<number>(0);
  const [isReadingEmpty, setIsReadingEmpty] = useState<boolean>(true);
  const [isFinishEmpty, setIsFinishEmpty] = useState<boolean>(true);

  const getMainData = async (token: string) => {
    try {
      const res = await fetchMain({ token });
      const data: fetchMainResponse = res.data;

      fetchAndSetNickname(token);
      fetchAndSetGoal(token);
      setBookReading(data.bookReading);
      setBookFinished(data.bookFinished);
      setBookReadingCount(data.bookReadingCount);
      setBookFinishedCount(data.bookFinishedCount);
      setIsReadingEmpty(data.bookReading.length === 0);
      setIsFinishEmpty(data.bookFinished.length === 0);
    } catch (error) {
      showAlert('데이터를 가져오는 데에 실패했습니다.');
      console.error(error);
    }
  };

  const userLogin = (data: User) => {
    login(data).then(
      (res) => {
        storeLogin(res.accessToken);
        showAlert('로그인이 성공했습니다.');
        fetchAndSetNickname(res.accessToken);
        fetchAndSetGoal(res.accessToken);
        getMainData(res.accessToken);
        nav('/');
      },
      (error) => {
        console.log(error);
        showAlert(error.response.data.message);
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
        showAlert(error.response.data.message);
      }
    );
  };

  const userLogout = (token: string) => {
    logout({ accessToken: token }).then(
      () => {
        storeLogout();
        showAlert('로그아웃이 완료되었습니다.');
        nav('/auth/login');
      },
      (error) => {
        console.log(error);
        showAlert(error.response.data.message);
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
        showAlert(error.response.data.message);
      }
    );
  };

  const userWithdrawal = (token: string) => {
    withdrawal({ accessToken: token }).then(
      () => {
        localStorage.removeItem('token');
        showAlert('회원탈퇴가 완료되었습니다.');
        nav('/auth/login');
      },
      (error) => {
        console.log(error);
        showAlert(error.response.data.message);
      }
    );
  };

  const userChangeNickname = useMutation({
    mutationFn: (data: ChangeNickNameProps) => changeNickname(data),
    onSuccess: (res: ChangeNickNameResponse) => {
      showAlert('변경이 완료되었습니다.');
      const { userNickname, userGoal } = res;
      useAuthStore.setState({ userNickname, userGoal });
      queryClient.invalidateQueries({ queryKey: ['userNickname'] }); // 닉네임 및 목표 변경 후 사용자 정보를 다시 가져옴
    },
    onError: (error: any) => {
      console.log(error);
      showAlert(error.response.data.message);
    },
  });

  return {
    userSignup,
    userLogin,
    userChangePassword,
    userWithdrawal,
    userLogout,
    userChangeNickname: userChangeNickname.mutate,
    userNickname,
    userGoal,
    bookReading,
    bookFinished,
    bookFinishedCount,
    bookReadingCount,
    getMainData,
    isFinishEmpty,
    isReadingEmpty,
  };
};
