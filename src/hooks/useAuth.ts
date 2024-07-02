import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import {
    LoginResponse,
    changepassword,
    login,
    logout,
    signup,
    withdrawal,
} from "../api/auth.api";
import { User, UserChangePassword } from "../models/user.model";

export const useAuth = () => {
    const { storeLogin, storeLogout, isloggedIn } = useAuthStore();
    const { showAlert } = useAlert();
    const nav = useNavigate();

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

    return {
        userSignup,
        userLogin,
        userChangePassword,
        userWithdrawal,
        userLogout,
    };
};
