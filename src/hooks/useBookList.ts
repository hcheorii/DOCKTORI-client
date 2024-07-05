import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchBookList, finishBook, toggleLike } from '../api/book.api';
import { queryClient } from '../api/queryClient';

export const useBookList = (url: string) => {
  const { data, isLoading: isBookListLoading } = useQuery({
    queryKey: ['bookList', url],
    queryFn: () => fetchBookList(url),
  });

  const count = data?.count ? data.count : data?.books.length;

  const { mutate: clickLike } = useMutation({
    mutationFn: toggleLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookList', url] });
    },
  });

  const { mutate: clickFinish } = useMutation({
    mutationFn: finishBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookList', url] });
    },
  });

  return {
    bookList: data ? data.books : [],
    count,
    isBookListLoading,
    isEmpty: data?.books.length === 0,
    clickLike,
    clickFinish,
  };
};
