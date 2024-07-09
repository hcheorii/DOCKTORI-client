import React, { useState } from 'react';
import styled from 'styled-components';
import MainBookList from './MainBookList';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BookListItem } from '../../../models/book.model';
import BookEmpty from '../BookEmpty';
import Title from '../Title';

interface MainBookListSectionProps {
  title: string;
  books: BookListItem[];
  isEmpty: boolean;
}

const MainBookListSection: React.FC<MainBookListSectionProps> = ({
  title,
  books,
  isEmpty,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const booksPerPage = 3;

  const handlePrev = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    const indexOfLastBook = (currentPage + 1) * booksPerPage;
    if (indexOfLastBook >= books.length) return;
    setCurrentPage(currentPage + 1);
  };

  const handleIndicator = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <BookListSectionStyle>
      <Title color='first'>{title}</Title>
      {isEmpty && <BookEmpty />}
      {!isEmpty && (
        <>
          <MainBookList
            books={books.slice(
              currentPage * booksPerPage,
              (currentPage + 1) * booksPerPage
            )}
          />
          <div className='btnGroup'>
            <button onClick={handlePrev} className='prev'>
              <FaAngleLeft />
            </button>
            <IndicatorStyle>
              {Array.from({
                length: Math.ceil(books.length / booksPerPage),
              }).map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleIndicator(index)}
                  className={index === currentPage ? 'active' : ''}></span>
              ))}
            </IndicatorStyle>
            <button onClick={handleNext} className='next'>
              <FaAngleRight />
            </button>
          </div>
        </>
      )}
    </BookListSectionStyle>
  );
};

const BookListSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .btnGroup {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  button {
    border: 0;
    width: 30px;
    height: 30px;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      fill: ${({ theme }) => theme.color.first};
      vertical-align: middle; /* 버튼 내에서 세로 가운데 정렬 */
    }
  }
`;
const IndicatorStyle = styled.div`
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 100px;
    background: #fff;
    margin: 0 4px;
    cursor: pointer;

    &.active {
      background: ${({ theme }) => theme.color.first};
    }
  }
`;
export default MainBookListSection;
