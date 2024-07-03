import styled from 'styled-components';
import Title from '../components/BookList/Title';
import { useBookList } from '../hooks/useBookList';
import { FAVORITE } from '../constants/url';
import BookList from '../components/BookList/BookList';
import BookEmpty from '../components/BookList/BookEmpty';

function Favorite() {
  const { bookList, isBookListLoading, isEmpty, clickLike } =
    useBookList(FAVORITE);
  return (
    <BookListPageStyle>
      <Title color='first'>즐겨찾기</Title>
      {isEmpty && <BookEmpty />}
      {!isEmpty && <BookList books={bookList} handleLike={clickLike} />}
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
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    display: block;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.third};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`;
export default Favorite;
