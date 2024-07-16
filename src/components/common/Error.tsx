import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

interface RouteError {
  statusText?: string;
  message?: string;
}

const Error = () => {
  const error = useRouteError() as RouteError;

  return (
    <NotFoundContainer>
      <NotFound>
        <NotFound404>
          <h1>404</h1>
        </NotFound404>
        <h2>
          {error.statusText ||
            error.message ||
            "Oops, The Page you are looking for can't be found!"}
        </h2>
        <h3>찾을 수 없는 페이지입니다.</h3>
        <h3>요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요 : )</h3>
        <StyledLink href="/">Return To Homepage</StyledLink>
      </NotFound>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  position: relative;
  height: 100vh;
`;

const NotFound = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 710px;
  width: 100%;
  text-align: center;
  padding: 0px 15px;
  line-height: 1.4;
`;

const NotFound404 = styled.div`
  height: 200px;
  line-height: 200px;

  h1 {
    font-size: 168px;
    margin: 0;
    color: #8e6547;
    text-transform: uppercase;
  }
`;

const StyledLink = styled.a`
  font-family: 'Raleway', sans-serif;
  display: inline-block;
  font-weight: 700;
  border-radius: 15px;
  text-decoration: none;
  color: #8e6547;

  &:hover {
    color: #be8a62;
  }
`;

export default Error;
