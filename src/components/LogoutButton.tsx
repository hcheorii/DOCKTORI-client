import React from "react";
import { useAuthStore } from "../store/authStore";

const LogoutButton = () => {
    const { storeLogout } = useAuthStore();

    const handleLogout = () => {
        storeLogout();
        // 로그아웃 후에 이동할 페이지가 있다면 여기에 추가
        // 예: nav("/login");
    };

    return <button onClick={handleLogout}>로그아웃</button>;
};

export default LogoutButton;
