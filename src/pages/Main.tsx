// Main.tsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainBookListSection from "../components/BookList/Main/MainBookListSection";
import Button from "../components/common/Button";
import ChangeNicknameModal from "../components/modal/ChangeNicknameModal";
import { useAuth } from "../hooks/useAuth";

const Main: React.FC = () => {
    const {
        bookReading,
        bookFinished,
        userNickname,
        userGoal,
        bookReadingCount,
        bookFinishedCount,
        isReadingEmpty,
        isFinishEmpty,
        getMainData, // 가져오기 함수 추가
    } = useAuth();

    const [showModal, setShowModal] = useState(false); // 모달 상태를 관리하는 state

    const handleOpenModal = () => {
        setShowModal(true); // 모달 열기
    };

    const handleCloseModal = () => {
        setShowModal(false); // 모달 닫기
    };

    useEffect(() => {
        const token = localStorage.getItem("token") as string; // 토큰을 실제로 가져오는 로직 추가
        getMainData(token); // 초기 렌더링 시 데이터 가져오기
    }, []);

    return (
        <MainStyle>
            <div className="main">
                <div>
                    <p>목표</p>
                    <div className="user">
                        <div className="nickname">
                            {userNickname}
                            <Button
                                size={"small"}
                                scheme={"primary"}
                                onClick={handleOpenModal}
                            >
                                목표 변경
                            </Button>
                        </div>
                        <div className="goal">{userGoal}</div>
                    </div>
                </div>
                <div>
                    <p>나의 기록</p>
                    <div className="record">
                        <div>
                            <div className="sub_title">읽는 중</div>
                            <div className="len">{bookReadingCount}권</div>
                        </div>
                        <div>
                            <div className="sub_title">완독</div>
                            <div className="len">{bookFinishedCount}권</div>
                        </div>
                    </div>
                </div>
            </div>
            <MainBookListSection
                title="읽고 있는 책"
                books={bookReading}
                isEmpty={isReadingEmpty}
            />
            <MainBookListSection
                title="다 읽은 책"
                books={bookFinished}
                isEmpty={isFinishEmpty}
            />
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
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    .user {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .user,
    .record {
        border: 1px solid ${({ theme }) => theme.color.second};
        border-radius: ${({ theme }) => theme.borderRadius.medium};
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        background: ${({ theme }) => theme.color.white};
        padding: 40px;
        font-size: 1.5rem;
    }

    .nickname {
        font-weight: bold;
        display: flex;
        gap: 20px;
    }
    .goal {
        font-size: 1rem;
    }
    .sub_title {
        font-weight: bold;
    }
    .record {
        display: flex;
        gap: 20px;
    }
    .main {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        p {
            font-size: 1.2rem;
            color: ${({ theme }) => theme.color.first};
            font-weight: bold;
            margin: 0;
        }
    }
`;

export default Main;
