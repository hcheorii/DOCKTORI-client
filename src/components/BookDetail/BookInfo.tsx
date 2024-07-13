import styled from 'styled-components';
import { BookDetail, ChangeDateProps } from '../../models/book.model';
import Title from '../BookList/Title';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';
import React, { useState } from 'react';
import { useAlert } from '../../hooks/useAlert';

interface Props {
  isbn: string;
  book: BookDetail;
  handleDelete: (isbn: string) => void;
  handleChangeDate: (data: ChangeDateProps) => void;
}

export default function BookInfo({
  isbn,
  book,
  handleDelete,
  handleChangeDate,
}: Props) {
  const { bookTitle, bookAuthor, bookImage, bookStartDate, bookEndDate } = book;
  const [date, setDate] = useState({
    start: bookStartDate,
    end: bookEndDate || '',
  });

  const { showAlert } = useAlert();

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate((prev) => ({ ...prev, start: e.target.value }));
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate((prev) => ({ ...prev, end: e.target.value }));
  };

  const handleDateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0];

    if (date.start > currentDate || date.end > currentDate) {
      showAlert(
        '독서 시작일과 완료일은 미래일 수 없습니다.\n날짜를 다시 선택해주세요.'
      );
      setDate({ start: bookStartDate, end: bookEndDate || '' });
      return;
    }

    if (!date.start) return;

    if (date.end && date.start > date.end) {
      showAlert(
        '독서 완료일은 시작일보다 빠를 수 없습니다.\n날짜를 다시 선택해주세요.'
      );
      setDate((prev) => ({ ...prev, end: '' }));
      return;
    }

    handleChangeDate({
      isbn,
      sDate: date.start,
      eDate: date.end,
    });
    showAlert('날짜가 변경되었습니다.');
  };

  return (
    <BookInfoStyle>
      <button className="deleteBtn" onClick={() => handleDelete(isbn)}>
        삭제
        <FaTrashAlt />
      </button>
      <Title color="text">{bookTitle}</Title>
      <p className="author">{bookAuthor}</p>
      <div className="image">
        <img src={bookImage} alt={bookTitle} />
      </div>
      <form className="date" onSubmit={handleDateSubmit}>
        <div className="date-select">
          <div className="start">
            <label>시작일 : </label>
            <input
              type="date"
              value={date.start}
              onChange={handleStartChange}
            />
          </div>
          <div className="end">
            <label>완료일 : </label>
            <input type="date" value={date.end} onChange={handleEndChange} />
          </div>
        </div>
        <button className="date-checkBtn">
          <FaCheck />
        </button>
      </form>
    </BookInfoStyle>
  );
}

const BookInfoStyle = styled.div`
  position: relative;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /* 박스 쉐도우 추가 */

  .author {
    color: ${({ theme }) => theme.color.gray};
    font-size: 0.8rem;
    margin-bottom: 16px;
  }

  .image {
    width: 100%;
    text-align: center;
    margin-bottom: 16px;

    img {
      width: 100px;
    }
  }

  .date {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background: ${({ theme }) => theme.color.lightgray};
    padding: 12px 24px;
    margin-bottom: 16px;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /* 박스 쉐도우 추가 */

    .date-select {
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 0.9rem;

      input {
        padding: 2px;
        font-size: 0.9rem;
      }
    }

    button {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      transition: all 200ms ease-in-out;

      svg {
        fill: ${({ theme }) => theme.color.white};
        font-size: 1.2rem;
      }

      &:hover {
        transform: scale(1.1);
        svg {
          fill: ${({ theme }) => theme.color.check};
        }
      }
    }
  }

  .deleteBtn {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    gap: 4px;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;

    svg {
      font-size: 1.2rem;
    }

    &:hover {
      color: ${({ theme }) => theme.color.like};
      svg {
        fill: ${({ theme }) => theme.color.like};
      }
    }
  }
`;
