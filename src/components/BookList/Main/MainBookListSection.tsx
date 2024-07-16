import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainBookList from './MainBookList';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BookListItem } from '../../../models/book.model';
import BookEmpty from '../BookEmpty';
import Title from '../Title';

interface Props {
  title: string;
  books: BookListItem[];
  isEmpty: boolean;
}

const MainBookListSection = ({ title, books, isEmpty }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [booksPerPage, setBooksPerPage] = useState(3);
  const [maxBooksToShow, setMaxBooksToShow] = useState(9);

  useEffect(() => {
    const updateBooksPerPage = () => {
      if (window.innerWidth <= 700) {
        setBooksPerPage(1);
        setMaxBooksToShow(3);
      } else if (window.innerWidth <= 975) {
        setBooksPerPage(2);
        setMaxBooksToShow(6);
      } else {
        setBooksPerPage(3);
        setMaxBooksToShow(9);
      }
    };

    window.addEventListener('resize', updateBooksPerPage);
    updateBooksPerPage();

    return () => {
      window.removeEventListener('resize', updateBooksPerPage);
    };
  }, []);

  const visibleBooks = books.slice(0, maxBooksToShow);
  const pageCount = Math.ceil(visibleBooks.length / booksPerPage);

  const handlePrev = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    const indexOfLastBook = (currentPage + 1) * booksPerPage;
    if (indexOfLastBook >= visibleBooks.length) return;
    setCurrentPage(currentPage + 1);
  };

  const handleIndicator = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <BookListSectionStyle>
      <Title color="first">{title}</Title>
      {isEmpty && <BookEmpty />}
      {!isEmpty && (
        <>
          <MainBookList
            books={visibleBooks.slice(
              currentPage * booksPerPage,
              (currentPage + 1) * booksPerPage
            )}
          />
          <div className="btnGroup">
            <button onClick={handlePrev} className="prev">
              <FaAngleLeft />
            </button>
            <IndicatorStyle>
              {Array.from({ length: pageCount }).map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleIndicator(index)}
                  className={index === currentPage ? 'active' : ''}></span>
              ))}
            </IndicatorStyle>
            <button onClick={handleNext} className="next">
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
      vertical-align: middle;
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
