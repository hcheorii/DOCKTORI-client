import { useState } from "react";
import { addBook, fetchSearchBookList } from "../api/book.api";
import { BookSearchItem } from "../models/book.model";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";

export const useSearchBooks = () => {
    const [books, setBooks] = useState<BookSearchItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { showAlert } = useAlert();
    const nav = useNavigate();

    const searchBooks = async (title: string) => {
        setLoading(true);
        setError(null);
        try {
            const result = await fetchSearchBookList({ title }); // title을 직접 전달
            setBooks(result.data.books);
        } catch (error) {
            setError("책 검색 중 오류가 발생했습니다.");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const addSearchBook = async (book: BookSearchItem) => {
        try {
            await addBook(book);
            showAlert("책 등록이 완료되었습니다.");
            nav("/readingbooks");
        } catch (error) {
            console.log("책 등록 중 오류가 발생했습니다.", error);
        }
    };

    return { books, loading, error, searchBooks, addSearchBook };
};
