import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchBookList, toggleLike } from "../api/book.api";
import { queryClient } from "../api/queryClient";

export const useBookList = (url: string) => {
    const { data, isLoading: isBookListLoading } = useQuery({
        queryKey: [url],
        queryFn: () => fetchBookList(url),
    });

    const { mutate: clickLike } = useMutation({
        mutationFn: toggleLike,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [url] });
        },
    });

    return {
        bookList: data ? data.books : [],
        isBookListLoading,
        isEmpty: data?.books.length === 0,
        clickLike,
    };
};
