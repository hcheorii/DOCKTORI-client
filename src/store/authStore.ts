import { create } from "zustand";
import {
    UserNicknameProps,
    UserGoalResponse,
    UserNicknameResponse,
} from "../models/user.model";
import { fetchGoal, fetchNickname } from "../api/auth.api";

interface StoreState {
    isloggedIn: boolean;
    userNickname: string;
    userGoal: string;
    storeLogin: (token: string) => void;
    storeLogout: () => void;
    fetchAndSetNickname: (token: string) => Promise<void>;
    fetchAndSetGoal: (token: string) => Promise<void>;
}

export const getToken = () => localStorage.getItem("token");
export const setToken = (token: string) => localStorage.setItem("token", token);
export const removeToken = () => localStorage.removeItem("token");

export const useAuthStore = create<StoreState>((set) => ({
    isloggedIn: !!getToken(),
    userNickname: "",
    userGoal: "",
    storeLogin: (token: string) => {
        set({ isloggedIn: true });
        setToken(token);
    },
    storeLogout: () => {
        set({ isloggedIn: false });
        removeToken();
    },
    fetchAndSetNickname: async (accessToken: string) => {
        try {
            const response = await fetchNickname({
                accessToken,
            } as UserNicknameProps);
            const nickname = response.data.userNickname;
            set({ userNickname: nickname });
        } catch (error) {
            console.error("Failed to fetch nickname", error);
        }
    },
    fetchAndSetGoal: async (accessToken: string) => {
        try {
            const response = await fetchGoal({
                accessToken,
            } as UserNicknameProps);
            const goal = response.data.userGoal;
            if (goal) {
                set({ userGoal: goal });
            } else {
                set({ userGoal: "목표를 설정해주세요." });
            }
        } catch (error) {
            console.error("Failed to fetch goal", error);
        }
    },
}));
