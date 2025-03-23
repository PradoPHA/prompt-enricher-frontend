import React from "react";
import { GlobalStyle, Container, Main } from "./styles";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Main>{children}</Main>
      </Container>
    </>
  );
};

export default Layout;
