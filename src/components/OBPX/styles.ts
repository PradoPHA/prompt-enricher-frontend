import styled from "styled-components";

// Container para toda a página
export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  padding-top: 50px;
  padding-bottom: 40vh;
  background-color: rgb(19, 17, 17); /* Cor de fundo escura */
  color: white; /* Cor do texto clara */
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 2.5rem;
    margin: 0;
    color: white; /* Cor clara para o título */
  }

  h2 {
    font-size: 1.25rem;
    color: #bbb; /* Cor do texto secundário */
  }

  a {
    color: #4caf50; /* Cor de destaque para links */
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Textarea = styled.textarea`
  width: 80%;
  height: 150px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #555;
  border-radius: 8px;
  resize: none;
  background-color: #333; /* Cor de fundo para textarea */
  color: white; /* Cor do texto */
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #ccc; /* Cor clara para texto de labels */
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const ThresholdSlider = styled.input`
  width: 20%;
  -webkit-appearance: none;
  height: 8px;
  border-radius: 4px;
  background: #555; /* Cor escura para o slider */
  outline: none;
  opacity: 0.9;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #4caf50; /* Cor de destaque para o thumb */
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #4caf50;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    background-color: #666;
  }
`;

export const LoadingSpinner = styled.div`
  margin-left: 10px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Result = styled.div`
  width: 100%;
  max-height: 600px;
  overflow-y: auto;
  background-color: #333; /* Cor de fundo escura para resultados */
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;

  h3 {
    margin-top: 0;
    font-size: 1.5rem;
    color: white; /* Cor clara para o título */
  }

  pre {
    background-color: #222; /* Fundo ainda mais escuro para o código */
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
    font-family: monospace;
    color: #ccc; /* Cor clara para o texto */
  }
`;

export const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 15px;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  margin-top: 20px;
  text-align: center;
`;
