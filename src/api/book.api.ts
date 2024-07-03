import { BookListItem, BookSearchItem } from "../models/book.model";
import { httpClient } from "./http";

interface fetchBookListResponse {
    books: BookListItem[];
}

interface fetchSearchBookResponse {
    books: BookSearchItem[];
}
interface fetchSearchBooks {
    title: string;
}

export const fetchBookList = async (url: string) => {
    const { data } = await httpClient.get<fetchBookListResponse>(url);
    return data;
};

export const fetchSearchBookList = async (params: fetchSearchBooks) => {
    const response = await httpClient.get<fetchSearchBookResponse>(
        "/book/search",
        { params } // 객체 형식으로 전달
    );
    console.log(params.title);
    console.log(response);
    return response;
};

export const addBook = async (params: BookSearchItem) => {
    const response = await httpClient.put(
        "/book/select",
        params // 객체 형식으로 전달
    );
    return response;
};
