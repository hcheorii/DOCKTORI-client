import styled from 'styled-components';
import image from '../../images/logo_bgremoved.png';

const Intro = () => {
  return (
    <IntroStyle>
      <img src={image} alt="logo" className="logo" />
      <TextOverlay>📖 독서 기록을 쌓아보세요</TextOverlay>
    </IntroStyle>
  );
};

const IntroStyle = styled.div`
  flex: 1;
  background-color: #be8a62;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  .logo {
    width: 30%;
  }
`;
const TextOverlay = styled.div`
  font-size: 1.5rem;
`;

export default Intro;
