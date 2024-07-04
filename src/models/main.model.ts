import { BookListItem } from "./book.model";

export interface fetchMainProps {
    token: string;
}

export interface fetchMainResponse {
    userNickname: string;
    userGoal: string;
    bookReadingCount: number;
    bookFinishedCount: number;
    bookReading: BookListItem[];
    bookFinished: BookListItem[];
}
