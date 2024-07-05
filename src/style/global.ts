import 'sanitize.css';
import { createGlobalStyle } from 'styled-components'; //전역 스타일

export const GlobalStyle = createGlobalStyle`
    body {
        margin : 0;
        padding : 0;
        box-sizing: border-box;
    }
    h1 {
        margin : 0;
    }

    ul{
      list-style: none;
      padding: 0;
    }
`;
//타입이 dark인지 light 인지에 따라 black or white 로 설정
