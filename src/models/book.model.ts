interface Book {
  title: string;
  author: string;
  image: string;
  isbn: string;
}

export interface BookSearchItem extends Book {
  publisher: string;
}

export interface BookListItem extends Book {
  likeStatus: boolean;
  readStatus: boolean;
}

export interface BookDetail {
  bookTitle: string;
  bookAuthor: string;
  bookImage: string;
  bookStartDate: string;
  bookEndDate: string;
  bookRemind: string[];
  bookReview: string;
  bookScore: number;
}

export interface ChangeDateProps {
  isbn: string;
  sDate: string;
  eDate: string;
}
