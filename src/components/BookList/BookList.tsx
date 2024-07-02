import styled from 'styled-components';
import { BookListItem } from '../../models/book.model';
import BookItem from './BookItem';

interface Props {
  books: BookListItem[];
}

export default function BookList({ books }: Props) {
  return (
    <BookListStyle>
      {books.map((book) => (
        <BookItem key={book.isbn} book={book} />
      ))}
    </BookListStyle>
  );
}

const BookListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;
