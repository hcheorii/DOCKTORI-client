import styled from 'styled-components';
import Title from './Title';
import { FaBookOpen } from 'react-icons/fa6';

export default function BookEmpty() {
  return (
    <BookEmptyStyle>
      <div className='icon'>
        <FaBookOpen />
      </div>
      <Title color='gray'>책을 채워주세요</Title>
    </BookEmptyStyle>
  );
}

const BookEmptyStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .icon {
    svg {
      font-size: 3rem;
      fill: ${({ theme }) => theme.color.gray};
    }
  }
`;
