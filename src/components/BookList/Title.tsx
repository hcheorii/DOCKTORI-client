import React from 'react';
import styled from 'styled-components';
import { ColorKey } from '../../style/theme';

interface Props {
  color?: ColorKey;
  children: React.ReactNode;
}
export default function Title({ color, children }: Props) {
  return <TitleStyle color={color}>{children}</TitleStyle>;
}

const TitleStyle = styled.h1`
  color: ${({ theme, color }) => theme.color[color || 'text']};
`;
