import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import {
    changeNickname,
    changepassword,
    login,
    logout,
    signup,
    withdrawal,
} from "../api/auth.api";
import {
    ChangeNickNameProps,
    User,
    UserChangePassword,
} from "../models/user.model";
import { useState } from "react";
import { fetchMain } from "../api/main.api";
import { BookListItem } from "./../models/book.model";
import { fetchMainResponse } from "../models/main.model";

export const useAuth = () => {
    const { storeLogin, storeLogout, isloggedIn } = useAuthStore();
    const { showAlert } = useAlert();
    const nav = useNavigate();
    const [userNickname, setUserNickname] = useState<string>("");
    const [userGoal, setUserGoal] = useState<string>("");
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

            setUserNickname(data.userNickname);
            setUserGoal(data.userGoal);
            setBookReading(data.bookReading);
            setBookFinished(data.bookFinished);
            setBookReadingCount(data.bookReadingCount);
            setBookFinishedCount(data.bookFinishedCount);
            setIsReadingEmpty(data.bookReading.length === 0);
            setIsFinishEmpty(data.bookFinished.length === 0);
        } catch (error) {
            showAlert("데이터를 가져오는 데에 실패했습니다.");
            console.error(error);
        }
    };
    const userLogin = (data: User) => {
        login(data).then(
            (res) => {
                storeLogin(res.accessToken);
                showAlert("로그인이 성공했습니다.");
                nav("/");
            },
            (error) => {
                console.log(error);
                showAlert(error.response.data.message);
            }
        );
    };

    const userSignup = (data: User) => {
        signup(data).then(
            () => {
                showAlert("회원가입이 완료되었습니다.");
                nav("/auth/login");
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
                showAlert("로그아웃이 완료되었습니다.");
                nav("/auth/login");
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
                showAlert(
                    "비밀번호 변경이 완료되었습니다.\n다시 로그인 하세요."
                );
                localStorage.removeItem("token");
                nav("/auth/login");
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
                localStorage.removeItem("token");
                showAlert("회원탈퇴가 완료되었습니다.");
                nav("/auth/login");
            },
            (error) => {
                console.log(error);
                showAlert(error.response.data.message);
            }
        );
    };

    const userChangeNickname = (data: ChangeNickNameProps) => {
        changeNickname(data).then(
            () => {
                showAlert("변경이 완료되었습니다.");
            },
            (error) => {
                console.log(error);
            }
        );
    };

    return {
        userSignup,
        userLogin,
        userChangePassword,
        userWithdrawal,
        userLogout,
        userChangeNickname,
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
