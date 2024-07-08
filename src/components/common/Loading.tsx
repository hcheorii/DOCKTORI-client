import { FaSpinner } from 'react-icons/fa';
import styled from 'styled-components';

export default function Loading() {
  return (
    <LoadingStyle>
      <FaSpinner />
    </LoadingStyle>
  );
}

const LoadingStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    width: 70px;
    height: 70px;
    fill: ${({ theme }) => theme.color.third};
    animation: rotate 1.5s linear infinite;
  }
`;
