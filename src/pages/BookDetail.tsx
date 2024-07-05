import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useBookDetail } from '../hooks/useBookDetail';
import BookInfo from '../components/BookDetail/BookInfo';
import BookRemind from '../components/BookDetail/BookRemind';
import BookReview from '../components/BookDetail/BookReview';

export default function BookDetail() {
  const { bookId: isbn } = useParams();
  const { book, isBookLoading, handleDeleteBook, handleChangeDate } =
    useBookDetail(isbn!);

  return (
    <BookDetailStyle>
      {!isBookLoading && (
        <>
          <BookInfo
            isbn={isbn!}
            book={book!}
            handleDelete={handleDeleteBook}
            handleChangeDate={handleChangeDate}
          />
          <BookRemind />
          <BookReview />
        </>
      )}
    </BookDetailStyle>
  );
}

const BookDetailStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
