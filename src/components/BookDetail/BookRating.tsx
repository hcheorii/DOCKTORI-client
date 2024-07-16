import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

interface Props {
  score: number;
  onChange: (count: number) => void;
  readonly?: boolean;
}

const BookRating = ({ score, onChange, readonly }: Props) => {
  const handleStarClick = (idx: number) => {
    if (!readonly) {
      onChange(idx + 1);
    }
  };

  return (
    <BookRatingStyle>
      {[...Array(5)].map((_, idx) => (
        <Star
          key={idx}
          $filled={idx < score}
          $readonly={readonly}
          onClick={() => handleStarClick(idx)}
          className="star">
          <FaStar />
        </Star>
      ))}
    </BookRatingStyle>
  );
};

const BookRatingStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;

const Star = styled.span<StarProps>`
  cursor: ${({ $readonly }) => ($readonly ? 'default' : 'pointer')};
  color: ${({ theme, $filled }) =>
    $filled ? theme.color.third : theme.color.lightgray};
  font-size: 1.2rem;
  transition: color, 200ms, ease-in-out;

  &:hover {
    color: ${({ theme, $readonly }) => ($readonly ? '' : theme.color.third)};
  }
`;

interface StarProps {
  $filled: boolean;
  $readonly?: boolean;
}

export default BookRating;
