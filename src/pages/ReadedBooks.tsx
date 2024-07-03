import styled from 'styled-components';
import { BookListPageStyle } from './Favorite';
import Title from '../components/BookList/Title';
import { useBookList } from '../hooks/useBookList';
import { FINISH } from '../constants/url';
import BookEmpty from '../components/BookList/BookEmpty';
import BookList from '../components/BookList/BookList';

function ReadedBooks() {
  const { bookList, isBookListLoading, isEmpty, clickLike } =
    useBookList(FINISH);

  return (
    <BookListPageStyle>
      <Title color='first'>다 읽은 책</Title>
      {isEmpty && <BookEmpty />}
      {!isEmpty && <BookList books={bookList} handleLike={clickLike} />}
    </BookListPageStyle>
  );
}

export default ReadedBooks;
