import {
  ChangeUserInfoProps,
  ChangeUserInfoResponse,
  LoginResponse,
  LogoutResponse,
  SignupInfo,
  User,
  UserChangePassword,
  UserGoalResponse,
  UserNicknameResponse,
} from '../models/user.model';
import { httpClient } from './http';

export const signup = async (userData: SignupInfo) => {
  await httpClient.post('/auth/join', userData);
};

export const login = async (data: User) => {
  const response = await httpClient.post<LoginResponse>('/auth/login', data);
  return response.data;
};

export const logout = async () => {
  const response = await httpClient.post<LogoutResponse>('/auth/logout');
  return response.data;
};

export const changepassword = async (data: UserChangePassword) => {
  const response = await httpClient.patch<LoginResponse>(
    '/auth/password',
    data
  );
  return response.data;
};

export const withdrawal = async () => {
  const response = await httpClient.delete('/auth/cancelAccount');
  return response.data;
};

export const changeUserInfo = async (data: ChangeUserInfoProps) => {
  const response = await httpClient.post<ChangeUserInfoResponse>(
    '/home/changeGoal',
    data
  );

  return response.data;
};

export const fetchNickname = async () => {
  const response = await httpClient.get<UserNicknameResponse>('/home/nickname');
  return response.data;
};

export const fetchGoal = async () => {
  const response = await httpClient.get<UserGoalResponse>('/home/goal');
  return response.data;
};
