export interface User {
    email: string;
    password: string;
    nickname?: string;
}

export interface SignupInfo {
    email: string;
    password1: string;
    password2: string;
    nickname: string;
}

export interface UserChangePassword extends User {
    token: string;
    newpassword1: string;
    newpassword2: string;
}

export interface UserInfo {
    userNickname: string;
    userGoal: string;
}

export interface UserNicknameProps {
    accessToken: string;
}
export interface UserNicknameResponse {
    userNickname: string;
}

export interface UserGoalResponse {
    userGoal: string;
}
export interface LogoutInfo {
    accessToken: string;
}
export interface LoginResponse {
    accessToken: string; // 로그인 시 생성된 토큰
}

export interface LogoutResponse {
    clearCookie: string;
}
export interface ChangeNickNameProps {
    cNickname: string;
    cGoal: string;
}
