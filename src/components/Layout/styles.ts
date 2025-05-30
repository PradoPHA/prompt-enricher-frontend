import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden; /* Prevent horizontal scroll */
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
    font-size: 16px; /* Base font size for rem calculations */
  }

  main {
    flex: 1; 
  }

  /* Responsive typography */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 13px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const Footer = styled.footer`
  margin-top: auto;
  width: 100%;
`;
