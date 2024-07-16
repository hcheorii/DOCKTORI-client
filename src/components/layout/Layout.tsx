import { Outlet } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <RightSectionStyle>
        <Outlet />
      </RightSectionStyle>
    </>
  );
};

const RightSectionStyle = styled.div`
  height: 100%;
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background};
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: block;
  }
`;

export default Layout;
