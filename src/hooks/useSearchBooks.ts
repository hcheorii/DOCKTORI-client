import { BookSearchItem } from './../models/book.model';
import { useState } from 'react';
import { fetchSearchBookList } from '../api/book.api';

export const useSearchBooks = () => {
  const [books, setBooks] = useState<BookSearchItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchBooks = async (title: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchSearchBookList({ title });
      setBooks(result.data.books);
    } catch (error) {
      setError('책 검색 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return { books, loading, error, searchBooks };
};
