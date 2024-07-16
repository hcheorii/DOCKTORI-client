import styled from 'styled-components';
import Title from '../components/BookList/Title';
import { useBookList } from '../hooks/useBookList';
import { FAVORITE } from '../constants/url';
import BookList from '../components/BookList/BookList';
import BookEmpty from '../components/BookList/BookEmpty';
import Loading from '../components/common/Loading';

export default function Favorite() {
  const { bookList, isBookListLoading, isEmpty, clickLike, clickFinish } =
    useBookList(FAVORITE);

  return (
    <BookListPageStyle>
      <Title color="first">즐겨찾기</Title>
      {isEmpty && <BookEmpty />}
      {!isEmpty && isBookListLoading && <Loading />}
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

export const BookListPageStyle = styled.div`
  padding: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: auto;
`;
