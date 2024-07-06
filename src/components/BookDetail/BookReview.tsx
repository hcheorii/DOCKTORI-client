import styled from 'styled-components';
import Title from '../BookList/Title';
import BookDetailForm from './BookDetailForm';
import BookRating from './BookRating';
import { useState } from 'react';
import { AddReviewProps } from '../../models/book.model';
import { useAlert } from '../../hooks/useAlert';
import BookDetailContent from './BookDetailContent';
import { FaPen } from 'react-icons/fa';

interface Props {
  isbn: string;
  handleAddReview: (data: AddReviewProps) => void;
  review?: string;
  score?: number;
}

export default function BookReview({
  isbn,
  handleAddReview,
  review,
  score,
}: Props) {
  const [rating, setRating] = useState(score || 0);
  const [edit, setEdit] = useState(review ? false : true);
  const { showAlert } = useAlert();

  const handleRatingChange = (count: number) => {
    setRating(count);
  };

  const handleReviewSubmit = (content: string) => {
    if (rating === 0) {
      showAlert('별점을 매겨주세요.');
      return;
    }

    handleAddReview({
      isbn,
      score: rating,
      context: content,
    });

    setEdit(false);
  };

  return (
    <BookReviewStyle>
      <Title color='first'>서평</Title>
      <BookRating
        score={rating}
        onChange={handleRatingChange}
        readonly={edit ? false : true}
      />
      {edit && (
        <BookDetailForm
          placeholder='서평을 작성해보세요'
          onSubmit={handleReviewSubmit}
          value={review}
        />
      )}
      {!edit && review && (
        <BookDetailContent
          content={review}
          icon={<FaPen />}
          onClick={() => {
            setEdit(true);
          }}
        />
      )}
    </BookReviewStyle>
  );
}

const BookReviewStyle = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  .review {
    margin: 0;
    padding: 36px;
    border: 2px solid ${({ theme }) => theme.color.second};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    width: 100%;
    min-height: 50px;
  }
`;
