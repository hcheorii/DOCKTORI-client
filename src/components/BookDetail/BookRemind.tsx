import styled from 'styled-components';
import Title from '../BookList/Title';
import React, { useState } from 'react';
import { AddRemindProps, DeleteRemindProps } from '../../models/book.model';
import { FaTrashAlt } from 'react-icons/fa';

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
  const [text, setText] = useState('');

  const handleRemindSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text || !text.trim()) {
      setText('');
      return;
    }

    handleAddRemind({
      isbn,
      context: text,
    });

    setText('');
  };

  return (
    <BookRemindStyle>
      <Title color='first'>기억하고 싶은 구절</Title>
      <form className='editor' onSubmit={handleRemindSubmit}>
        <textarea
          placeholder='기억하고 싶은 구절을 기록해보세요.'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>추가</button>
      </form>
      <ul className='reminds'>
        {reminds.map((remind, index) => (
          <li key={index} className='remind'>
            <p>{remind}</p>
            <button onClick={() => handleDeleteRemind({ isbn, index })}>
              <FaTrashAlt />
            </button>
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

    .remind {
      position: relative;
      padding: 36px;
      border: 2px solid ${({ theme }) => theme.color.second};
      border-radius: ${({ theme }) => theme.borderRadius.medium};
      width: 100%;
      min-height: 50px;

      p {
        margin: 0;
      }

      button {
        position: absolute;
        bottom: 8px;
        right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${({ theme }) => theme.color.third};
        border: none;
        border-radius: ${({ theme }) => theme.borderRadius.rounded};
        width: 1.8rem;
        height: 1.8rem;
        cursor: pointer;
        transition: all 200ms ease-in-out;

        svg {
          font-size: 1.1rem;
          fill: ${({ theme }) => theme.color.white};
        }

        &:hover {
          background: ${({ theme }) => theme.color.like};
          transform: rotate(15deg);
        }
      }
    }
  }
`;
