export interface User {
    email: string;
    password: string;
    nickname?: string;
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

export interface LogoutInfo {
    accessToken: string;
}
