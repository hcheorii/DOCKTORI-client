import { useMutation } from '@tanstack/react-query';
import { BookSearchItem } from '../models/book.model';
import { addBook } from '../api/book.api';
import { queryClient } from '../api/queryClient';
import { READING } from '../constants/url';
import { useNavigate } from 'react-router-dom';

export const useAddBook = () => {
  const nav = useNavigate();

  const { mutate: addSearchBook } = useMutation({
    mutationFn: (book: BookSearchItem) => addBook(book),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookList', READING] });
      nav('/readingbooks');
    },
    onError: (error: Error) => {
      console.log('책 등록 중 오류가 발생했습니다.', error);
    },
  });

  return { addSearchBook };
};
