import { FaCircleUser } from 'react-icons/fa6';
import styled from 'styled-components';
import Button from './Button';
import image from '../../images/logo_bgremoved.png';
import { FaPlus } from 'react-icons/fa';

export default function Navbar() {
  return (
    <NavbarStyle>
      <div className='item-containter'>
        <div className='logo'>
          <img src={image} alt='logo' />
        </div>
        <Button scheme='primary' size='large'>
          <FaPlus /> <span>책 등록하기</span>
        </Button>
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
      </div>
      <div className='user'>
        <FaCircleUser size={35} />
      </div>
    </NavbarStyle>
  );
}

const NavbarStyle = styled.div`
  position: relative;
  flex: 1;
  background-color: #be8a62;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  border-top-left-radius: 12px; /* 왼쪽 상단 모서리 둥글게 */
  border-bottom-left-radius: 12px; /* 왼쪽 하단 모서리 둥글게 */
  justify-content: space-between;

  .logo {
    img {
      width: 70%; /* 이미지크기 조정 */
    }
  }
  .item-containter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .user {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
`;
