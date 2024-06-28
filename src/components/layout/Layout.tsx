// src/components/AuthLayout.tsx
import React from "react";
import styled from "styled-components";
import image from "../../../images/logo_bgremoved.png"; // 로고 이미지 경로

// Layout 컴포넌트 정의, children prop으로 자식 요소를 받습니다.
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <CenteredLayout>
            <LayoutStyle>
                <div className="left-section">
                    <img src={image} alt="logo" className="logo" />
                    <div className="item-containter">
                        <button>1</button>
                        <button>1</button>
                        <button>1</button>
                        <button>1</button>
                    </div>
                </div>
                <div className="right-section">{children}</div>
            </LayoutStyle>
        </CenteredLayout>
    );
};

// 중앙에 배치된 레이아웃 스타일
const CenteredLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* 화면의 세로 전체를 차지 */
`;

// 레이아웃 스타일 정의
const LayoutStyle = styled.div`
    display: flex;
    height: 95vh;
    width: 95vw;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /* 박스 쉐도우 추가 */
    border-radius: 12px; /* border-radius 추가 */

    .left-section {
        flex: 1;
        background-color: #be8a62;
        display: flex;
        flex-direction: column;
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
        flex: 4;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-top-right-radius: 12px; /* 오른쪽 상단 모서리 둥글게 */
        border-bottom-right-radius: 12px; /* 오른쪽 하단 모서리 둥글게 */
    }

    .item-containter {
        display: flex;
        flex-direction: column;
    }
`;

export default Layout;
