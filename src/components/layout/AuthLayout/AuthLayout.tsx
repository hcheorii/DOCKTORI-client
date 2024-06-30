// src/components/AuthLayout.tsx
import React from 'react';
import Intro from '../../common/Intro';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AuthLayout = () => {
  return (
    <>
      <Intro />
      <RightSectionStyle>
        <Outlet />
      </RightSectionStyle>
    </>
  );
};

const RightSectionStyle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background};
  border-top-right-radius: 12px; /* 오른쪽 상단 모서리 둥글게 */
  border-bottom-right-radius: 12px; /* 오른쪽 하단 모서리 둥글게 */
`;

export default AuthLayout;
