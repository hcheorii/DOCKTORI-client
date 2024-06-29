// src/App.tsx
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { light } from './style/theme'; // 테마 파일 경로
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import { GlobalStyle } from './style/global';
import Error from './components/common/Error';
import Wrapper from './components/layout/Wrapper';
import Layout from './components/layout/Layout';
import AuthLayout from './components/layout/AuthLayout/AuthLayout';
import Favorite from './pages/Favorite';
import ChangePassword from './pages/ChangePassword';
import ReadingBooks from './pages/ReadingBooks';
import ReadedBooks from './pages/ReadedBooks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wrapper />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/main',
            element: <Main />,
            index: true,
          },
          {
            path: '/favorite',
            element: <Favorite />,
            index: true,
          },
          {
            path: '/changepassword',
            element: <ChangePassword />,
            index: true,
          },
          {
            path: '/readingbooks',
            element: <ReadingBooks />,
            index: true,
          },
          {
            path: '/readedbooks',
            element: <ReadedBooks />,
            index: true,
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/signup',
            element: <Signup />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;
