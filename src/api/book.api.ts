import { BookListItem } from '../models/book.model';
import { httpClient } from './http';

interface fetchBookListResponse {
  books: BookListItem[];
}

export const fetchBookList = async (url: string) => {
  const { data } = await httpClient.get<fetchBookListResponse>(url);
  return data;
};
