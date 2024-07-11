// MainBookItem.tsx
import React from 'react';
import styled from 'styled-components';
import { BookListItem } from '../../../models/book.model';
import { Link } from 'react-router-dom';

interface Props {
  book: BookListItem;
}

const MainBookItem: React.FC<Props> = ({ book }) => {
  return (
    <BookBookItemStyle>
      <Link to={`/book/${book.isbn}`}>
        <img src={book.image} alt={book.title} />
      </Link>
      <div className="info">
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
      </div>
    </BookBookItemStyle>
  );
};

const BookBookItemStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  width: 100%;
  overflow: hidden;

  a {
    width: 100%;
    height: 100%;
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80%;
      min-width: 60px;
      object-fit: cover;
    }
  }

  .info {
    flex: 2;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    min-width: 0;

    p {
      margin: 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1;
    }

    .title {
      font-size: 1.1rem;
      font-weight: bold;
      color: ${({ theme }) => theme.color.text};
    }

    .author {
      color: ${({ theme }) => theme.color.gray};
      font-size: 0.9rem;
    }
  }

  @media (max-width: 975px) {
    .info {
      flex: 1;

      .title {
        font-size: 1rem;
      }
      .author {
        font-size: 0.8rem;
      }
    }
  }
`;

export default MainBookItem;
