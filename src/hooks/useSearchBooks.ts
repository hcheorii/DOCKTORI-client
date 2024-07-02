import { useState } from "react";
import { fetchSearchBookList } from "../api/book.api";
import { BookListItem } from "../models/book.model";

export const useSearchBooks = () => {
    const [books, setBooks] = useState<BookListItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const searchBooks = async (title: string) => {
        setLoading(true);
        setError(null);
        try {
            const result = await fetchSearchBookList({ title }); // title을 직접 전달
            setBooks(result.data.books);
            console.log(result);
            console.log(result.data.books);
            console.log(title);
        } catch (error) {
            setError("책 검색 중 오류가 발생했습니다.");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return { books, loading, error, searchBooks };
};
