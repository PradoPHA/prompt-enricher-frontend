import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  background-color: var(--black);
  top: 0;
  left: 0;
  z-index: 1000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between; /* Para garantir que os ícones fiquem nas extremidades */
  align-items: center;
  background-color: rgb(19, 17, 17);
  color: white;
  width: 100%;
  margin: 0; /* Remove qualquer margem extra */
  padding: 0 20px; /* Padding nas laterais para alinhamento */

  h1 {
    text-align: center; /* Centraliza o título */
    flex: 1; /* Isso garante que o título ocupe o máximo de espaço possível */
    margin: 0;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 10px; /* Pequeno espaçamento entre logo e título */
  }

  .social-links {
    display: flex;
    gap: 15px;
  }

  .social-links a {
    color: white;
  }
`;
