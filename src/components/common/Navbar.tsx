import { FaStar, FaBookOpen, FaBook, FaPlus } from "react-icons/fa";
import Button from "./Button";
import image from "../../images/logo_bgremoved.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoLogOut, IoTrashBin } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import ConfirmModal from "../modal/ConfirmModal";
import { useAuth } from "../../hooks/useAuth";
import { useModal } from "../../hooks/useModal";
import SearchModal from "../modal/SearchModal";
import { BookSearchItem } from "../../models/book.model";
import { useAddBook } from "../../hooks/useAddBook";
import styled from "styled-components";
import { FaCircleUser } from "react-icons/fa6";
import DropDown from "./Dropdown";

export default function Navbar() {
    const { openModal } = useModal();
    const { userWithdrawal, userLogout } = useAuth();
    const { addSearchBook } = useAddBook();
    const nav = useNavigate();
    const location = useLocation();

    const [isMediumScreen, setIsMediumScreen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsMediumScreen(window.innerWidth <= 1360);
            setIsSmallScreen(window.innerWidth <= 700);
        };

        window.addEventListener("resize", updateScreenSize);
        updateScreenSize();

        return () => {
            window.removeEventListener("resize", updateScreenSize);
        };
    }, []);

    const onClickLogo = () => {
        nav("/main");
    };

    const handleSearchClick = () => {
        openModal(SearchModal, {
            onSubmit: (book: BookSearchItem) => {
                addSearchBook(book);
            },
        });
    };

    const handleLogoutClick = () => {
        openModal(ConfirmModal, {
            children: <p>로그아웃하시겠습니까?</p>,
            onSubmit: userLogout,
        });
    };

    const handleWithdrawalClick = () => {
        openModal(ConfirmModal, {
            children: (
                <>
                    <p>독토리 서비스를 탈퇴하시겠습니까?</p>
                    <p>기존 데이터는 모두 삭제됩니다.</p>
                </>
            ),
            onSubmit: userWithdrawal,
        });
    };

    return (
        <NavbarStyle>
            <div className="item-containter">
                <div className="logo" onClick={onClickLogo}>
                    <img src={image} alt="logo" />
                </div>
                <Button
                    onClick={handleSearchClick}
                    scheme="primary"
                    size="large"
                >
                    <div>
                        <FaPlus />{" "}
                        {!isMediumScreen && (
                            <StyledSpan>책 등록하기</StyledSpan>
                        )}
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
                            <Link to="/favorite">
                                {isSmallScreen ? <FaStar /> : "즐겨찾기"}
                            </Link>
                        </li>
                        <li
                            className={`link-item ${
                                location.pathname === "/readingbooks"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link to="/readingbooks">
                                {isSmallScreen ? (
                                    <FaBookOpen />
                                ) : (
                                    "읽고 있는 책"
                                )}
                            </Link>
                        </li>
                        <li
                            className={`link-item ${
                                location.pathname === "/readedbooks"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link to="/readedbooks">
                                {isSmallScreen ? <FaBook /> : "다 읽은 책"}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="user">
                <DropDown toggleButton={<FaCircleUser size={35} />}>
                    <Link to="/auth/changepassword">
                        <RiLockPasswordFill />
                        <span>비밀번호 변경</span>
                    </Link>
                    <div onClick={handleLogoutClick}>
                        <IoLogOut />
                        <span>로그아웃</span>
                    </div>
                    <div onClick={handleWithdrawalClick}>
                        <IoTrashBin />
                        <span>회원탈퇴</span>
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
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    justify-content: space-between;

    .logo {
        img {
            width: 70%;
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

const StyledSpan = styled.span`
    margin-left: 8px;
`;
