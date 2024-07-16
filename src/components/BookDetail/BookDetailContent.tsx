import React from 'react';
import styled from 'styled-components';

interface Props {
  content: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const BookDetailContent = ({ content, icon, onClick }: Props) => {
  return (
    <BookDetailContentStyle>
      <p>{content}</p>
      <button onClick={onClick}>{icon}</button>
    </BookDetailContentStyle>
  );
};

const BookDetailContentStyle = styled.div`
  position: relative;
  padding: 36px;
  border: 2px solid ${({ theme }) => theme.color.second};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 100%;

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
`;

export default BookDetailContent;
