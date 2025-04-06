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
  justify-content: space-between;
  align-items: center;
  background-color: rgb(19, 17, 17);
  color: white;
  width: 100%;
  margin: 0;
  padding: 0 20px;

  h1 {
    text-align: center;
    flex: 1;
    margin: 0;
    font-weight: 700;
    letter-spacing: 2px;
    font-family: "Roboto", sans-serif;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .social-links {
    display: flex;
    gap: 25px;
  }

  .social-links a {
    color: #ffffff;
    font-size: 1.5rem;
    transition: transform 0.2s ease-in-out, color 0.3s ease;
  }

  .social-links a:hover {
    transform: scale(1.2);
    color: #4caf50;
  }
`;
