import styled from "styled-components";
import { BookListItem } from "../../models/book.model";
import { Link } from "react-router-dom";

interface Props {
    book: BookListItem;
}

export default function MainBookItem({ book }: Props) {
    const trimmedTitle =
        book.title.length > 10 ? `${book.title.slice(0, 10)}...` : book.title;

    return (
        <BookBookItemStyle>
            <Link to={`/book/${book.isbn}`}>
                <img src={book.image} alt={book.title} />
            </Link>
            <div className="info">
                <p className="title">{trimmedTitle}</p>
                <p className="author">{book.author}</p>
            </div>
        </BookBookItemStyle>
    );
}

const BookBookItemStyle = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    color: ${({ theme }) => theme.color.text};
    img {
        height: 180px;
    }
    a {
        width: 100%;
        height: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 80%;
            min-width: 80px;
        }
    }

    .info {
        position: relative;
        flex: 1;
        height: 100%;
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8px; /* 조정 */

        p {
            margin: 0;
        }

        .title {
            font-size: 1.2rem;
            font-weight: bold;
            white-space: nowrap; /* 한 줄로 표시 */
            overflow: hidden; /* 넘치는 부분 숨김 */
            text-overflow: ellipsis; /* 넘칠 경우 ... 표시 */
        }

        .author {
            color: ${({ theme }) => theme.color.gray};
            font-size: 1rem;
        }
    }
`;
