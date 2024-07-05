import { useMutation, useQuery } from '@tanstack/react-query';
import {
  addRemind,
  changeDate,
  deleteBook,
  deleteRemind,
  fetchBookDetail,
} from '../api/book.api';
import { useNavigate } from 'react-router-dom';
import {
  AddRemindProps,
  ChangeDateProps,
  DeleteRemindProps,
} from '../models/book.model';
import { queryClient } from '../api/queryClient';

export const useBookDetail = (isbn: string) => {
  const navigate = useNavigate();
  const { data: book, isLoading: isBookLoading } = useQuery({
    queryKey: ['bookDetail', isbn],
    queryFn: () => fetchBookDetail(isbn),
  });

  const { mutate: handleChangeDate } = useMutation({
    mutationFn: (data: ChangeDateProps) => changeDate(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookDetail', isbn] });
    },
  });

  const { mutate: handleDeleteBook } = useMutation({
    mutationFn: (isbn: string) => deleteBook(isbn),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['bookDetail', isbn] });
      queryClient.invalidateQueries({ queryKey: ['bookList'] });
      navigate('/readingbooks');
    },
  });

  const { mutate: handleAddRemind } = useMutation({
    mutationFn: (data: AddRemindProps) => addRemind(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookDetail', isbn] });
    },
  });

  const { mutate: handleDeleteRemind } = useMutation({
    mutationFn: (data: DeleteRemindProps) => deleteRemind(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookDetail', isbn] });
    },
  });

  return {
    book,
    isBookLoading,
    handleDeleteBook,
    handleChangeDate,
    handleAddRemind,
    handleDeleteRemind,
  };
};
