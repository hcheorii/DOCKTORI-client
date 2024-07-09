import {
  ChangeNickNameProps,
  ChangeNickNameResponse,
  LoginResponse,
  LogoutInfo,
  LogoutResponse,
  SignupInfo,
  User,
  UserChangePassword,
  UserGoalResponse,
  UserNicknameProps,
  UserNicknameResponse,
} from '../models/user.model';
import { httpClient } from './http';

// 회원 가입 함수
export const signup = async (userData: SignupInfo) => {
  const response = await httpClient.post('/auth/join', userData);
  console.log(response.data);
};

// 로그인 함수
export const login = async (data: User) => {
  const response = await httpClient.post<LoginResponse>('/auth/login', data);
  return response.data;
};

//로그아웃 함수
export const logout = async (data: LogoutInfo) => {
  const response = await httpClient.post<LogoutResponse>('/auth/logout', data);
  return response.data;
};

// 비밀번호 변경 함수
export const changepassword = async (data: UserChangePassword) => {
  const response = await httpClient.patch<LoginResponse>(
    '/auth/password',
    data
  );
  return response.data;
};

// 회원 탈퇴 함수
export const withdrawal = async (data: LoginResponse) => {
  const response = await httpClient.delete<LoginResponse>(
    '/auth/cancelAccount',
    {
      data: data, // 요청 본문에 데이터를 포함시킵니다.
    }
  );
  return response.data;
};

export const changeNickname = async (data: ChangeNickNameProps) => {
  const response = await httpClient.post<ChangeNickNameResponse>(
    '/home/changeGoal',
    data
  );

  return response.data;
};

export const fetchNickname = async (params: UserNicknameProps) => {
  const response = await httpClient.get<UserNicknameResponse>(
    '/home/nickname',
    {
      params,
    }
  );
  return response;
};

export const fetchGoal = async (params: UserNicknameProps) => {
  const response = await httpClient.get<UserGoalResponse>('/home/main', {
    params,
  });
  return response;
};
