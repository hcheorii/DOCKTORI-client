import styled from 'styled-components';
import { BookListItem } from '../../models/book.model';
import BookItem from './BookItem';

interface Props {
  books: BookListItem[];
  handleLike: (isbn: string) => void;
  handleFinish?: (isbn: string) => void;
}

const BookList = ({ books, handleLike, handleFinish }: Props) => {
  return (
    <BookListStyle>
      {books.map((book) => (
        <BookItem
          key={book.isbn}
          book={book}
          handleLike={handleLike}
          handleFinish={handleFinish}
        />
      ))}
    </BookListStyle>
  );
};

const BookListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media screen and (max-width: 1360px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 975px) {
    grid-template-columns: 1fr;
  }
`;

export default BookList;
