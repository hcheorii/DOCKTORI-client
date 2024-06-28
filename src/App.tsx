// src/App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { light } from "./style/theme"; // 테마 파일 경로
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";

function App() {
    return (
        <ThemeProvider theme={light}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/main" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
