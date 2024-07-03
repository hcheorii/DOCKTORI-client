import styled from 'styled-components';
import { BookListItem } from '../../models/book.model';
import BookItem from './BookItem';

interface Props {
  books: BookListItem[];
  handleLike: (isbn: string) => void;
}

export default function BookList({ books, handleLike }: Props) {
  return (
    <BookListStyle>
      {books.map((book) => (
        <BookItem key={book.isbn} book={book} handleLike={handleLike} />
      ))}
    </BookListStyle>
  );
}

const BookListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;
