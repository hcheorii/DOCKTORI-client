import styled from 'styled-components';
import { BookListItem } from '../../models/book.model';
import { Link } from 'react-router-dom';

interface Props {
  book: BookListItem;
}

export default function BookItem({ book }: Props) {
  return (
    <BookItemStyle>
      <Link to={`/book/${book.isbn}`}>
        <div className='img'>
          <img src={book.image} alt={book.title} />
        </div>
        <div className='info'>
          <p className='title'>{book.title}</p>
          <p className='author'>{book.author}</p>
        </div>
      </Link>
    </BookItemStyle>
  );
}

const BookItemStyle = styled.div`
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    color: ${({ theme }) => theme.color.text};
  }

  .img {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80%;
      min-width: 80px;
    }
  }
  .info {
    flex: 1;
    height: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .author {
      color: ${({ theme }) => theme.color.first};
    }
  }
`;
