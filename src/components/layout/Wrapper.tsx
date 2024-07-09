import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
  return (
    <WrapperContainer>
      <ContentContainer>{children}</ContentContainer>
    </WrapperContainer>
  );
}

const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 화면의 세로 전체를 차지 */
  background-color: ${({ theme }) => theme.color.lightgray};
`;

const ContentContainer = styled.div`
  display: flex;
  height: 90vh;
  width: 95vw;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /* 박스 쉐도우 추가 */
  border-radius: 12px; /* border-radius 추가 */
  overflow: hidden;
`;
