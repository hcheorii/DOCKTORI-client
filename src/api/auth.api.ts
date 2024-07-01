import { User } from "../models/user.model";
import { httpClient } from "./http";

export const signup = async (userData: User) => {
    const response = await httpClient.post("/auth/join", userData);
    console.log(response.data);
};

interface LoginResponse {
    accessToken: string; //로그인할때 만든 토큰
}
export const login = async (data: User) => {
    const response = await httpClient.post<LoginResponse>("/auth/login", data);
    return response.data;
};

export const changepassword = async (data: User) => {
    const response = await httpClient.post<LoginResponse>(
        "/auth/changePassword",
        data
    );
    return response.data;
};
