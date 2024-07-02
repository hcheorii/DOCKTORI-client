import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}
export default function Title({ children }: Props) {
  return <TitleStyle>{children}</TitleStyle>;
}

const TitleStyle = styled.h1`
  color: ${({ theme }) => theme.color.third};
`;
