import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <Header />
      <RightSectionStyle>
        <Outlet />
      </RightSectionStyle>
    </>
  );
};

const RightSectionStyle = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-top-right-radius: 12px; /* 오른쪽 상단 모서리 둥글게 */
  border-bottom-right-radius: 12px; /* 오른쪽 하단 모서리 둥글게 */
`;

export default Layout;
