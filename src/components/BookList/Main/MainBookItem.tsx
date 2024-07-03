// MainBookItem.tsx
import React from "react";
import styled from "styled-components";
import { BookListItem } from "../../../models/book.model";
import { Link } from "react-router-dom";

interface Props {
    book: BookListItem;
}

const MainBookItem: React.FC<Props> = ({ book }) => {
    const trimmedTitle =
        book.title.length > 10 ? `${book.title.slice(0, 10)}...` : book.title;
    const trimmedAuthor =
        book.author.length > 10 ? `${book.author.slice(0, 5)}...` : book.author;
    return (
        <BookBookItemStyle>
            <Link to={`/book/${book.isbn}`}>
                <img src={book.image} alt={book.title} />
            </Link>
            <div className="info">
                <p className="title">{trimmedTitle}</p>
                <p className="author">{trimmedAuthor}</p>
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

    img {
        height: 180px;
        width: 130px;
        min-width: 80px;
        object-fit: cover;
        border-radius: ${({ theme }) => theme.borderRadius.small};
    }

    .info {
        flex: 1;
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8px;
        min-width: 0;

        p {
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .title {
            font-size: 1.2rem;
            font-weight: bold;
            color: ${({ theme }) => theme.color.text};
        }

        .author {
            color: ${({ theme }) => theme.color.gray};
            font-size: 1rem;
        }
    }
`;

export default MainBookItem;
