import { useQuery } from '@tanstack/react-query';
import { fetchBookList } from '../api/book.api';

export const useBookList = (url: string) => {
  const { data, isLoading: isBookListLoading } = useQuery({
    queryKey: [url],
    queryFn: () => fetchBookList(url),
  });

  return {
    bookList: data ? data.books : [],
    isBookListLoading,
    isEmpty: data?.books.length === 0,
  };
};
