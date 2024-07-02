import { LogoutInfo, User, UserChangePassword } from "../models/user.model";
import { httpClient } from "./http";

// 회원 가입 함수
export const signup = async (userData: User) => {
    const response = await httpClient.post("/auth/join", userData);
    console.log(response.data);
};

export interface LoginResponse {
    accessToken: string; // 로그인 시 생성된 토큰
}

export interface LogoutResponse {
    clearCookie: string;
}

// 로그인 함수
export const login = async (data: User) => {
    const response = await httpClient.post<LoginResponse>("/auth/login", data);
    return response.data;
};

//로그아웃 함수
export const logout = async (data: LogoutInfo) => {
    const response = await httpClient.post<LogoutResponse>(
        "/auth/logout",
        data
    );
    return response.data;
};

// 비밀번호 변경 함수
export const changepassword = async (data: UserChangePassword) => {
    const response = await httpClient.post<LoginResponse>(
        "/auth/changePassword",
        data
    );
    return response.data;
};

// 회원 탈퇴 함수
export const withdrawal = async (data: LoginResponse) => {
    const response = await httpClient.delete<LoginResponse>(
        "/auth/cancelAccount",
        {
            data: data, // 요청 본문에 데이터를 포함시킵니다.
        }
    );
    return response.data;
};
