import { useEffect, useState } from "react";
import { useAlert } from "./useAlert";
import { fetchMain } from "../api/main.api";
import { BookListItem } from "./../models/book.model";
import { fetchMainResponse } from "../models/main.model";

export const useMain = () => {
    const { showAlert } = useAlert();
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

    useEffect(() => {
        const token = localStorage.getItem("token") as string; // 토큰을 실제로 가져오는 로직 추가
        getMainData(token);
    }, []);

    return {
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
