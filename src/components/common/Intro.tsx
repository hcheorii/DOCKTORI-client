import styled from 'styled-components';
import image from '../../images/logo_bgremoved.png';

export default function Intro() {
  return (
    <IntroStyle>
      <img src={image} alt='logo' className='logo' />
      <TextOverlay>📖 독서 기록을 쌓아보세요</TextOverlay>
    </IntroStyle>
  );
}

const IntroStyle = styled.div`
  flex: 1;
  background-color: #be8a62;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  border-top-left-radius: 12px; /* 왼쪽 상단 모서리 둥글게 */
  border-bottom-left-radius: 12px; /* 왼쪽 하단 모서리 둥글게 */

  .logo {
    width: 30%; /* 이미지 크기 조정 */
  }
`;
const TextOverlay = styled.div`
  font-size: 1.5rem; /* 글꼴 크기 조정 */
`;
