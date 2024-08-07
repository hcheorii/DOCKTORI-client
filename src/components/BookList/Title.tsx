import React from 'react';
import styled from 'styled-components';
import { ColorKey } from '../../style/theme';

interface Props {
  color?: ColorKey;
  children: React.ReactNode;
}

const Title = ({ color, children }: Props) => {
  return <TitleStyle color={color}>{children}</TitleStyle>;
};

const TitleStyle = styled.h1`
  font-size: 1.8rem;
  color: ${({ theme, color }) => theme.color[color || 'text']};

  @media (max-width: 975px) {
    font-size: 1.5rem;
  }
`;

export default Title;
