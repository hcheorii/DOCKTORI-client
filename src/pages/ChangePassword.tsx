import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { UserChangePassword } from "../models/user.model";
import { useNavigate } from "react-router-dom";
import { getToken } from "../store/authStore";
import { useEffect } from "react";
import { useAlert } from "../hooks/useAlert";

function ChangePassword() {
    const { userChangePassword } = useAuth();
    const nav = useNavigate();
    const { showAlert } = useAlert();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserChangePassword>();

    const onSubmit = (data: UserChangePassword) => {
        const token = getToken() as string; // 타입 단언을 사용하여 token이 string임을 명시
        const dataWithToken = {
            ...data,
            token,
        };
        userChangePassword(dataWithToken);
    };

    useEffect(() => {
        if (getToken() === null) {
            showAlert("로그인이 필요합니다.");
            nav("/auth/login");
        }
    }, [nav, showAlert]); // 빈 배열을 추가하여 처음 렌더링될 때만 실행

    return (
        <ChangePasswordStyle>
            <div className="title">비밀번호 변경</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <input
                        inputMode="text"
                        placeholder="변경할 비밀번호"
                        type="password"
                        {...register("newpassword1", { required: true })}
                    />
                    {errors.newpassword1 && (
                        <p className="error-text">
                            새 비밀번호를 입력해주세요.
                        </p>
                    )}
                </fieldset>
                <fieldset>
                    <input
                        inputMode="text"
                        placeholder="변경할 비밀번호 확인"
                        type="password"
                        {...register("newpassword2", { required: true })}
                    />
                    {errors.newpassword2 && (
                        <p className="error-text">
                            새 비밀번호 확인을 입력해주세요.
                        </p>
                    )}
                </fieldset>
                <fieldset>
                    <button type="submit">변경</button>
                </fieldset>
                <fieldset>
                    <button
                        className="cancel"
                        onClick={(e) => {
                            e.preventDefault();
                            nav("/main");
                        }}
                    >
                        취소
                    </button>
                </fieldset>
            </form>
        </ChangePasswordStyle>
    );
}

const ChangePasswordStyle = styled.div`
    width: 80%;
    max-width: 400px;
    text-align: center;

    .title {
        font-size: 1.5rem;
        margin: 15px 0;
    }

    form {
        width: 100%;
    }

    fieldset {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
        border: none;
    }

    input {
        padding: 15px;
        margin-bottom: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 10px;
        background-color: #874314;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
    }

    .cancel {
        background-color: #be8a62;
    }

    button:hover {
        background-color: #872314;
    }

    .cancel:hover {
        background-color: #b57a59;
    }

    .error-text {
        color: red;
        font-size: 12px;
        margin: 0;
        text-align: left;
    }

    .info {
        width: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: end;
    }

    .info a {
        color: #874314;
        text-decoration: none;
    }

    .info a:hover {
        text-decoration: underline;
    }
`;

export default ChangePassword;
