import { BookListPageStyle } from './Favorite';
import Title from '../components/BookList/Title';
import { useBookList } from '../hooks/useBookList';
import { READING } from '../constants/url';
import BookList from '../components/BookList/BookList';
import BookEmpty from '../components/BookList/BookEmpty';

function ReadingBooks() {
  const { bookList, isBookListLoading, isEmpty, clickLike, clickFinish } =
    useBookList(READING);

  return (
    <BookListPageStyle>
      <Title color='first'>읽고 있는 책</Title>
      {isEmpty && <BookEmpty />}
      {!isEmpty && (
        <BookList
          books={bookList}
          handleLike={clickLike}
          handleFinish={clickFinish}
        />
      )}
    </BookListPageStyle>
  );
}

export default ReadingBooks;
