// Main.tsx
import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/BookList/Title";
import { READING, FINISH } from "../constants/url"; // FINISH URL 추가
import { useBookList } from "../hooks/useBookList";
import MainBookList from "../components/BookList/MainBookList";
import BookEmpty from "../components/BookList/BookEmpty";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Main() {
    const {
        bookList: readingBooks,
        isEmpty: isReadingEmpty,
        clickLike: clickLikeReading,
    } = useBookList(READING);
    const {
        bookList: finishedBooks,
        isEmpty: isFinishEmpty,
        clickLike: clickLikeFinish,
    } = useBookList(FINISH);

    const [currentReadingPage, setCurrentReadingPage] = useState(0);
    const [currentFinishPage, setCurrentFinishPage] = useState(0);

    const booksPerPage = 3;

    const handlePrevReading = () => {
        if (currentReadingPage === 0) return;
        setCurrentReadingPage(currentReadingPage - 1);
    };

    const handleNextReading = () => {
        const indexOfLastBook = (currentReadingPage + 1) * booksPerPage;
        const totalBooks = readingBooks.length;
        if (indexOfLastBook >= totalBooks) return;
        setCurrentReadingPage(currentReadingPage + 1);
    };

    const handlePrevFinish = () => {
        if (currentFinishPage === 0) return;
        setCurrentFinishPage(currentFinishPage - 1);
    };

    const handleNextFinish = () => {
        const indexOfLastBook = (currentFinishPage + 1) * booksPerPage;
        const totalBooks = finishedBooks.length;
        if (indexOfLastBook >= totalBooks) return;
        setCurrentFinishPage(currentFinishPage + 1);
    };

    const handleReadingIndicator = (index: number) => {
        setCurrentReadingPage(index);
    };

    const handleFinishIndicator = (index: number) => {
        setCurrentFinishPage(index);
    };

    return (
        <MainStyle>
            <div className="user">
                <div>
                    <Title color="first">목표</Title>
                    <div>목표 박스</div>
                </div>
                <div>
                    <Title color="first">나의 기록</Title>
                    <div>나의 기록 박스</div>
                </div>
            </div>
            <div className="reading">
                <Title color="first">
                    읽고 있는 책{isReadingEmpty && <BookEmpty />}
                </Title>
                {!isReadingEmpty && (
                    <>
                        <MainBookList
                            books={readingBooks.slice(
                                currentReadingPage * booksPerPage,
                                (currentReadingPage + 1) * booksPerPage
                            )}
                            handleLike={clickLikeReading}
                        />
                        <div className="btnGroup">
                            <button onClick={handlePrevReading}>
                                <FaAngleLeft />
                            </button>
                            <BannerIndicatorStyle>
                                {Array.from({
                                    length: Math.ceil(
                                        readingBooks.length / booksPerPage
                                    ),
                                }).map((_, index) => (
                                    <span
                                        key={index}
                                        onClick={() =>
                                            handleReadingIndicator(index)
                                        }
                                        className={
                                            index === currentReadingPage
                                                ? "active"
                                                : ""
                                        }
                                    ></span>
                                ))}
                            </BannerIndicatorStyle>
                            <button onClick={handleNextReading}>
                                <FaAngleRight />
                            </button>
                        </div>
                    </>
                )}
            </div>
            <div className="readed">
                <Title color="first">
                    다 읽은 책{isFinishEmpty && <BookEmpty />}
                </Title>
                {!isFinishEmpty && (
                    <>
                        <MainBookList
                            books={finishedBooks.slice(
                                currentFinishPage * booksPerPage,
                                (currentFinishPage + 1) * booksPerPage
                            )}
                            handleLike={clickLikeFinish}
                        />
                        <div className="btnGroup">
                            <button onClick={handlePrevFinish}>
                                <FaAngleLeft />
                            </button>
                            <BannerIndicatorStyle>
                                {Array.from({
                                    length: Math.ceil(
                                        finishedBooks.length / booksPerPage
                                    ),
                                }).map((_, index) => (
                                    <span
                                        key={index}
                                        onClick={() =>
                                            handleFinishIndicator(index)
                                        }
                                        className={
                                            index === currentFinishPage
                                                ? "active"
                                                : ""
                                        }
                                    ></span>
                                ))}
                            </BannerIndicatorStyle>
                            <button onClick={handleNextFinish}>
                                <FaAngleRight />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </MainStyle>
    );
}

const MainStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    .reading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .readed {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    button {
        border: 0;
        width: 40px;
        height: 40px;
        background: none;

        svg {
            fill: ${({ theme }) => theme.color.first};
        }
    }
    .btnGroup {
        display: flex;
        gap: 15px;
    }
`;

const BannerIndicatorStyle = styled.div`
    display: flex;
    align-items: center;
    span {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 100px;
        background: #fff;
        margin: 0 4px;
        cursor: pointer;

        &.active {
            background: ${({ theme }) => theme.color.first};
        }
    }
`;

export default Main;
