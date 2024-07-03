import styled from "styled-components";
import { BookListItem } from "../../models/book.model";
import MainBookItem from "./MainBookItem";

interface Props {
    books: BookListItem[];
    handleLike: (isbn: string) => void;
}

export default function MainBookList({ books }: Props) {
    return (
        <MainBookListStyle>
            {books.map((book) => (
                <MainBookItem key={book.isbn} book={book} />
            ))}
        </MainBookListStyle>
    );
}

const MainBookListStyle = styled.div`
    width: 100%;
    padding: 0 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
`;
