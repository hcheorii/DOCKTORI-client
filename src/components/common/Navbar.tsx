// src/components/Navbar.tsx
import { FaCircleUser } from 'react-icons/fa6';
import styled from 'styled-components';
import Button from './Button';
import image from '../../images/logo_bgremoved.png';
import { FaPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { IoLogOut, IoTrashBin } from 'react-icons/io5';
import DropDown from './Dropdown';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useAlert } from '../../hooks/useAlert';
import { useState } from 'react';
import ConfirmModal from '../modal/ConfirmModal';
export default function Navbar() {
  const { isloggedIn, storeLogout } = useAuthStore();
  const nav = useNavigate();

  const onClickLogo = () => {
    nav('/main');
  };

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showWithdrawalModal, setShowWithdrawalModal] = useState(false);

  const handleLogoutClose = () => setShowLogoutModal(false);
  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    storeLogout();
    nav('/login');
  };

  const handleWithdrawalClose = () => setShowWithdrawalModal(false);
  const handleWithdrawalConfirm = () => {
    setShowWithdrawalModal(false);
    console.log('회원 탈퇴되었습니다.');
    //회원탈퇴 API 사용
    nav('/login');
  };

  return (
    <NavbarStyle>
      {showLogoutModal && (
        <ConfirmModal
          handleClose={handleLogoutClose}
          handleConfirm={handleLogoutConfirm}>
          <p>정말 로그아웃하시겠습니까?</p>
        </ConfirmModal>
      )}
      {showWithdrawalModal && (
        <ConfirmModal
          handleClose={handleWithdrawalClose}
          handleConfirm={handleWithdrawalConfirm}>
          <p>독토리 서비스를 탈퇴하시겠습니까?</p>
          <p>기존 데이터는 모두 삭제됩니다.</p>
        </ConfirmModal>
      )}
      <div className='item-containter'>
        <div className='logo' onClick={onClickLogo}>
          <img src={image} alt='logo' />
        </div>
        <Button scheme='primary' size='large'>
          <div>
            <FaPlus /> <span>책 등록하기</span>
          </div>
        </Button>
        <nav>
          <ul className='link-items'>
            <li className='link-item'>
              <Link to='/favorite'>즐겨찾기</Link>
            </li>
            <li className='link-item'>
              <Link to='/readingbooks'>읽고 있는 책</Link>
            </li>
            <li className='link-item'>
              <Link to='/readedbooks'>다 읽은 책</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='user'>
        <DropDown toggleButton={<FaCircleUser size={35} />}>
          <Link to='/changepassword'>
            <RiLockPasswordFill />
            비밀번호 변경
          </Link>
          <div onClick={() => setShowLogoutModal(true)}>
            <IoLogOut />
            로그아웃
          </div>
          <div onClick={() => setShowWithdrawalModal(true)}>
            <IoTrashBin />
            회원탈퇴
          </div>
        </DropDown>
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
      cursor: pointer;
    }
  }
  .item-containter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;

    nav {
      width: 100%;

      .link-items {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
      }

      .link-item {
        font-size: 1.5rem;
        width: 100%;
        padding: 12px 0;
        a {
          display: block;
          width: 100%;
        }
      }
      .link-item > * {
        text-decoration: none;
        color: white;
      }
      .link-item:hover {
        background-color: ${({ theme }) => theme.color.first};
      }
    }
  }
  .user {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
`;
