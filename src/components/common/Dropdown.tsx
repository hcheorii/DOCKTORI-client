// src/components/DropDown.tsx
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
    children: React.ReactNode; // 패널안에 들어가는 내용
    toggleButton: React.ReactNode; // 버튼 변형 가능
    isOpen?: boolean; // 열려있는지에 대한 상태
}

function DropDown({ children, toggleButton, isOpen = false }: Props) {
    const [open, setOpen] = useState(isOpen);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [dropdownRef]);

    return (
        <DropDownStyle $open={open} ref={dropdownRef}>
            <button className="toggle" onClick={() => setOpen(!open)}>
                {toggleButton}
            </button>
            {open && (
                <div className="panel" onClick={() => setOpen(false)}>
                    {children}
                </div>
            )}
        </DropDownStyle>
    );
}

interface DropDownStyleProps {
    $open: boolean;
}

const DropDownStyle = styled.div<DropDownStyleProps>`
    position: relative;
    button {
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
        svg {
            width: 30px;
            height: 30px;
            fill: ${({ theme, $open }) =>
                $open ? theme.color.primary : theme.color.text};
        }
        svg:hover {
            fill: ${({ theme }) => theme.color.background};
        }
    }

    .panel {
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 40px;
        right: 0;
        width: 200px;
        padding: 10px;
        background-color: ${({ theme }) => theme.color.background};
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: ${({ theme }) => theme.borderRadius.default};
        z-index: 100;
    }

    .panel > * {
        display: flex;
        gap: 3px;
        text-align: center;
        align-items: center;
        padding: 10px;
        font-size: 1.3rem;
        text-decoration: none;
        color: black;
        border-radius: ${({ theme }) => theme.borderRadius.default};
    }

    .panel > *:hover {
        background-color: #be8a62;
        color: #fff;
        cursor: pointer;
    }
`;

export default DropDown;
