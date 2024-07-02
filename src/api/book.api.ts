import { BookListItem } from "../models/book.model";
import { httpClient } from "./http";

interface fetchBookListResponse {
    books: BookListItem[];
}
interface fetchSearchBooks {
    title: string;
}

export const fetchBookList = async (url: string) => {
    const { data } = await httpClient.get<fetchBookListResponse>(url);
    return data;
};

export const fetchSearchBookList = async (params: fetchSearchBooks) => {
    const response = await httpClient.get<fetchBookListResponse>(
        "/book/search",
        { params } // 객체 형식으로 전달
    );
    console.log(params.title);
    return response;
};
