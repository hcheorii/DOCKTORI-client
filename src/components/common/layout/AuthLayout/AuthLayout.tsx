// src/components/AuthLayout.tsx
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import image from "../../images/logo_bgremoved.png";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const GlobalStyle = createGlobalStyle`
        body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
    `;

    return (
        <>
            <GlobalStyle />
            <CenteredLayout>
                <Layout>
                    <div className="left-section">
                        <img src={image} alt="logo" className="logo" />
                        <TextOverlay>📖 독서 기록을 쌓아보세요</TextOverlay>
                    </div>
                    <div className="right-section">{children}</div>
                </Layout>
            </CenteredLayout>
        </>
    );
};

const CenteredLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* 화면의 세로 전체를 차지 */
`;

const Layout = styled.div`
    display: flex;
    height: 80vh;
    width: 70vw;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /* 박스 쉐도우 추가 */
    border-radius: 12px; /* border-radius 추가 */

    .left-section {
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
            width: 50%; /* 이미지 크기 조정 */
        }
    }

    .right-section {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-top-right-radius: 12px; /* 오른쪽 상단 모서리 둥글게 */
        border-bottom-right-radius: 12px; /* 오른쪽 하단 모서리 둥글게 */
    }
`;

const TextOverlay = styled.div`
    font-size: 1.5rem; /* 글꼴 크기 조정 */
`;

export default AuthLayout;
