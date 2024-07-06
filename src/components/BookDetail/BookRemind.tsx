import styled from 'styled-components';
import Title from '../BookList/Title';
import React, { useState } from 'react';
import { AddRemindProps, DeleteRemindProps } from '../../models/book.model';
import { FaTrashAlt } from 'react-icons/fa';
import BookDetailForm from './BookDetailForm';
import BookDetailContent from './BookDetailContent';

interface Props {
  isbn: string;
  reminds: string[];
  handleAddRemind: (data: AddRemindProps) => void;
  handleDeleteRemind: (data: DeleteRemindProps) => void;
}

export default function BookRemind({
  isbn,
  reminds,
  handleAddRemind,
  handleDeleteRemind,
}: Props) {
  const onSubmit = (content: string) => {
    handleAddRemind({
      isbn,
      context: content,
    });
  };

  return (
    <BookRemindStyle>
      <Title color='first'>기억하고 싶은 구절</Title>
      <BookDetailForm
        placeholder='기억하고 싶은 구절을 기록해보세요'
        onSubmit={onSubmit}
      />
      <ul className='reminds'>
        {reminds.map((remind, index) => (
          <li key={index}>
            <BookDetailContent
              content={remind}
              icon={<FaTrashAlt />}
              onClick={() => handleDeleteRemind({ isbn, index })}
            />
          </li>
        ))}
      </ul>
    </BookRemindStyle>
  );
}

const BookRemindStyle = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  .editor {
    width: 60%;
    display: flex;
    justify-content: center;
    gap: 2px;

    textarea {
      resize: none;
      flex: 1;
      padding: 25px;
      outline: none;
      border: 1px solid ${({ theme }) => theme.color.second};
      border-radius: ${({ theme }) => theme.borderRadius.default};

      &:focus {
        border-color: ${({ theme }) => theme.color.third};
        outline: 1px solid ${({ theme }) => theme.color.third};
      }
    }

    button {
      width: 50px;
      border: none;
      background: none;
      outline: none;
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.first};
      border-radius: ${({ theme }) => theme.borderRadius.default};
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.color.second};
      }
    }
  }

  .reminds {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    li {
      width: 100%;
    }
  }
`;
