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
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Garantir que o body ocupe a altura total da tela */
  }

  main {
    flex: 1; /* Faz com que o conteúdo principal ocupe o espaço restante */
  }


`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
`;

export const Footer = styled.footer`
  margin-top: auto;
`;
