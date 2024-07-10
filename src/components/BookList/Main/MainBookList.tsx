import React from "react";
import styled from "styled-components";
import { BookListItem } from "../../../models/book.model";
import MainBookItem from "./MainBookItem";

interface Props {
    books: BookListItem[];
}

const MainBookList: React.FC<Props> = ({ books }) => {
    return (
        <MainBookListStyle>
            {books.map((book) => (
                <MainBookItem key={book.isbn} book={book} />
            ))}
        </MainBookListStyle>
    );
};

const MainBookListStyle = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 975px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
    gap: 25px;
    margin: 12px 0;
`;

export default MainBookList;
