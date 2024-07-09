import { BookSearchItem } from "./../models/book.model";
import { useState } from "react";
import { addBook, fetchSearchBookList } from "../api/book.api";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../api/queryClient";
import { READING } from "../constants/url";
import { useMutation } from "@tanstack/react-query";

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
            const result = await fetchSearchBookList({ title });
            setBooks(result.data.books);
        } catch (error) {
            setError("책 검색 중 오류가 발생했습니다.");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const { mutate: addSearchBook } = useMutation({
        mutationFn: (book: BookSearchItem) => addBook(book),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["bookList", READING] });
            showAlert("책 등록이 완료되었습니다.");
            nav("/readingbooks");
        },
        onError: (error: Error) => {
            console.log("책 등록 중 오류가 발생했습니다.", error);
        },
    });

    return { books, loading, error, searchBooks, addSearchBook };
};
