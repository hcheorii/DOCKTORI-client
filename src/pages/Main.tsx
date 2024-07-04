// Main.tsx
import React from "react";
import styled from "styled-components";
import { FINISH } from "../constants/url";
import { useBookList } from "../hooks/useBookList";
import MainBookListSection from "../components/BookList/Main/MainBookListSection";
import { useMain } from "../hooks/useMain";

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
    } = useMain();

    return (
        <MainStyle>
            <div className="user">
                <div>
                    <p>목표</p>
                    <div className="goal">
                        {userNickname}
                        {userGoal}
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
        </MainStyle>
    );
};

const MainStyle = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    .goal,
    .record {
        border: 1px solid ${({ theme }) => theme.color.second};
        border-radius: ${({ theme }) => theme.borderRadius.medium};
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        background: ${({ theme }) => theme.color.white};
        padding: 40px;
        font-size: 1.5rem;
    }

    .sub_title {
        font-weight: bold;
    }
    .record {
        display: flex;
        gap: 20px;
    }
    .user {
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
