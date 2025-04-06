import * as S from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importe os ícones
import Image from "next/image";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <div className="logo-container">
          <Image src="/logo.png" alt="Logo" width={200} height={150} />
          <h1>OBPX - Ontology Based Prompt Expander</h1>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/pradopha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/phaprado"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </S.Header>
    </S.Wrapper>
  );
};
