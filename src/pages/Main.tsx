// Main.tsx
import React, { useState } from "react";
import styled from "styled-components";
import MainBookListSection from "../components/BookList/Main/MainBookListSection";
import ChangeNicknameModal from "../components/modal/ChangeNicknameModal";
import { useUserInfo } from "../hooks/useUserInfo";
import { useBookList } from "../hooks/useBookList";
import { FINISH, READING } from "../constants/url";
import Title from "../components/BookList/Title";
import { FaPen } from "react-icons/fa";

const Main: React.FC = () => {
    const { nickname, goal, isUserInfoLoading } = useUserInfo();
    const {
        bookList: readingList,
        count: readingCount,
        isBookListLoading: isReadingListLoading,
        isEmpty: isReadingListEmpty,
    } = useBookList(READING);
    const {
        bookList: finishList,
        count: finishedCount,
        isBookListLoading: isFinishListLoading,
        isEmpty: isFinishListEmpty,
    } = useBookList(FINISH);

    const [showModal, setShowModal] = useState(false); // 모달 상태를 관리하는 state

    const handleOpenModal = () => {
        setShowModal(true); // 모달 열기
    };

    const handleCloseModal = () => {
        setShowModal(false); // 모달 닫기
    };

    return (
        <MainStyle>
            {!isUserInfoLoading && (
                <div className="profile">
                    <div className="profile_item">
                        <div className="title">
                            <Title color="first">목표</Title>
                            <button onClick={handleOpenModal}>
                                <FaPen />
                            </button>
                        </div>
                        <div className="user">
                            <p className="nickname">{nickname}</p>
                            <p className="goal">{goal}</p>
                        </div>
                    </div>
                    <div className="profile_item">
                        <Title color="first">나의 기록</Title>
                        <div className="records">
                            <div className="record">
                                <p className="sub_title">읽는 중</p>
                                <p className="count">{readingCount}권</p>
                            </div>
                            <div className="record">
                                <p className="sub_title">완독</p>
                                <p className="count">{finishedCount}권</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!isReadingListLoading && (
                <MainBookListSection
                    title="읽고 있는 책"
                    books={readingList}
                    isEmpty={isReadingListEmpty}
                />
            )}
            {!isFinishListLoading && (
                <MainBookListSection
                    title="다 읽은 책"
                    books={finishList}
                    isEmpty={isFinishListEmpty}
                />
            )}
            {showModal && (
                <ChangeNicknameModal
                    handleClose={handleCloseModal}
                    showModal={showModal}
                >
                    <p>새로운 닉네임과 목표를 입력하세요.</p>
                </ChangeNicknameModal>
            )}
        </MainStyle>
    );
};

const MainStyle = styled.div`
    padding: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow-y: auto;

    p {
        margin: 0;
    }

    .profile {
        display: flex;
        align-items: center;
        gap: 25px;
    }

    .profile_item {
        flex: 1;
    }

    .title {
        display: flex;
        align-items: center;
        gap: 8px;

        button {
            cursor: pointer;
            background: none;
            border: none;

            svg {
                fill: ${({ theme }) => theme.color.first};
                font-size: 1.2rem;
            }

            &:hover {
                svg {
                    fill: ${({ theme }) => theme.color.third};
                }
            }
        }
    }

    .user {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4px;

        .nickname {
            font-weight: bold;
        }

        .goal {
            font-size: 1.3rem;
        }
    }

    .user,
    .records {
        min-height: 200px;
        min-width: 300px;
        border: 1px solid ${({ theme }) => theme.color.first};
        border-radius: ${({ theme }) => theme.borderRadius.medium};
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        background: ${({ theme }) => theme.color.white};
        padding: 40px;
        font-size: 1.5rem;
        margin: 12px 0;
    }

    .records {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        .record {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        .sub_title {
            font-weight: bold;
        }

        .count {
            font-size: 1.3rem;
        }
    }
`;

export default Main;
