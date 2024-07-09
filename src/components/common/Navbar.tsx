import { FaCircleUser } from "react-icons/fa6";
import styled from "styled-components";
import Button from "./Button";
import image from "../../images/logo_bgremoved.png";
import { FaPlus } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { IoLogOut, IoTrashBin } from "react-icons/io5";
import DropDown from "./Dropdown";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import ConfirmModal from "../modal/ConfirmModal";
import { useAuth } from "../../hooks/useAuth";
import { useAlert } from "../../hooks/useAlert";
import SearchModal from "../modal/SearchModal"; // 불러오기

export default function Navbar() {
    const { isloggedIn, storeLogout } = useAuthStore();
    const { userWithdrawal, userLogout } = useAuth();
    const nav = useNavigate();
    const location = useLocation();
    const { showAlert } = useAlert();

    const onClickLogo = () => {
        nav("/main");
    };

    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [showWithdrawalModal, setShowWithdrawalModal] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);

    const handleSearchClose = () => setShowSearchModal(false);

    const handleLogoutClose = () => setShowLogoutModal(false);
    const handleLogoutConfirm = () => {
        setShowLogoutModal(false);
        userLogout();
    };

    const handleWithdrawalClose = () => setShowWithdrawalModal(false);
    const handleWithdrawalConfirm = () => {
        setShowWithdrawalModal(false);
        const token = localStorage.getItem("token");
        if (token) {
            userWithdrawal(token);
        } else {
            showAlert("로그인이 필요합니다.");
            nav("/auth/login");
        }
    };

    return (
        <NavbarStyle>
            {showLogoutModal && (
                <ConfirmModal
                    handleClose={handleLogoutClose}
                    handleConfirm={handleLogoutConfirm}
                >
                    <p>정말 로그아웃하시겠습니까?</p>
                </ConfirmModal>
            )}
            {showWithdrawalModal && (
                <ConfirmModal
                    handleClose={handleWithdrawalClose}
                    handleConfirm={handleWithdrawalConfirm}
                >
                    <p>독토리 서비스를 탈퇴하시겠습니까?</p>
                    <p>기존 데이터는 모두 삭제됩니다.</p>
                </ConfirmModal>
            )}
            {showSearchModal && (
                <SearchModal
                    showModal={showSearchModal}
                    handleClose={handleSearchClose}
                >
                    <p>책을 검색하세요.</p>
                </SearchModal>
            )}
            <div className="item-containter">
                <div className="logo" onClick={onClickLogo}>
                    <img src={image} alt="logo" />
                </div>
                <Button
                    onClick={() => setShowSearchModal(true)}
                    scheme="primary"
                    size="large"
                >
                    <div>
                        <FaPlus /> <span>책 등록하기</span>
                    </div>
                </Button>
                <nav>
                    <ul className="link-items">
                        <li
                            className={`link-item ${
                                location.pathname === "/favorite"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link to="/favorite">즐겨찾기</Link>
                        </li>
                        <li
                            className={`link-item ${
                                location.pathname === "/readingbooks"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link to="/readingbooks">읽고 있는 책</Link>
                        </li>
                        <li
                            className={`link-item ${
                                location.pathname === "/readedbooks"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link to="/readedbooks">다 읽은 책</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="user">
                <DropDown toggleButton={<FaCircleUser size={35} />}>
                    <Link to="/auth/changepassword">
                        <RiLockPasswordFill />
                        비밀번호 변경
                    </Link>
                    <div onClick={() => setShowLogoutModal(true)}>
                        <IoLogOut />
                        로그아웃
                    </div>
                    <div onClick={() => setShowWithdrawalModal(true)}>
                        <IoTrashBin />
                        회원탈퇴
                    </div>
                </DropDown>
            </div>
        </NavbarStyle>
    );
}

const NavbarStyle = styled.div`
    position: relative;
    flex: 1;
    background-color: #be8a62;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-align: center;
    border-top-left-radius: 12px; /* 왼쪽 상단 모서리 둥글게 */
    border-bottom-left-radius: 12px; /* 왼쪽 하단 모서리 둥글게 */
    justify-content: space-between;

    .logo {
        img {
            width: 70%; /* 이미지크기 조정 */
            cursor: pointer;
        }
    }
    .item-containter {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        width: 100%;

        nav {
            width: 100%;

            .link-items {
                display: flex;
                flex-direction: column;
                width: 100%;
            }

            .link-item {
                font-size: 1.5rem;
                width: 100%;
                padding: 12px 8px;
                a {
                    display: block;
                    width: 100%;
                }
            }
            .link-item > * {
                text-decoration: none;
                color: white;
            }
            .link-item:hover,
            .link-item.active {
                background-color: ${({ theme }) => theme.color.first};
            }
        }
    }
    .user {
        position: absolute;
        right: 12px;
        bottom: 12px;
    }
`;
