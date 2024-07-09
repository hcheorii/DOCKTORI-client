import {
    AddRemindProps,
    AddReviewProps,
    BookDetail,
    BookListItem,
    BookSearchItem,
    ChangeDateProps,
    DeleteRemindProps,
} from "../models/book.model";
import { httpClient } from "./http";

interface fetchBookListResponse {
    books: BookListItem[];
    count?: number;
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
        { params }
    );
    console.log(params.title);
    console.log(response);
    return response;
};

export const addBook = async (params: BookSearchItem) => {
    const response = await httpClient.put("/book/select", params);
    return response;
};

export const toggleLike = async (isbn: string) => {
    return await httpClient.post("/book/like", { isbn });
};

export const finishBook = async (isbn: string) => {
    return await httpClient.post("/book/finishReading", { isbn });
};

export const fetchBookDetail = async (isbn: string) => {
    const { data } = await httpClient.get<BookDetail>(`/book/detail`, {
        params: { isbn },
    });
    return data;
};

export const deleteBook = async (isbn: string) => {
    return await httpClient.delete("/book/deleteBook", { data: { isbn } });
};

export const changeDate = async (data: ChangeDateProps) => {
    return await httpClient.post("/book/changeDate", data);
};

export const addRemind = async (data: AddRemindProps) => {
    return await httpClient.put("/book/remind", data);
};

export const deleteRemind = async (data: DeleteRemindProps) => {
    return await httpClient.delete("/book/deleteRemind", { data });
};

export const AddReview = async (data: AddReviewProps) => {
    return await httpClient.post("/book/review", data);
};
