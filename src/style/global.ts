import "sanitize.css";
import { createGlobalStyle } from "styled-components"; //전역 스타일

export const GlobalStyle = createGlobalStyle`
    body {
        margin : 0;
        padding : 0;
    }
    h1 {
        margin : 0;
    }

`;
//타입이 dark인지 light 인지에 따라 black or white 로 설정
