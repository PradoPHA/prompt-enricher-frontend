import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  padding-top: 50px;
  padding-bottom: 40vh;
  background-color: #121212;
  color: #f1f1f1;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #4caf50;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 1.3rem;
    color: #bbb;
    line-height: 1.6;
  }

  a {
    color: #4caf50;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #81c784;
      text-decoration: underline;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 600px;
`;

export const Textarea = styled.textarea`
  width: 90%;
  height: 150px;
  padding: 15px;
  font-size: 1.1rem;
  border: 2px solid #444;
  border-radius: 12px;
  background-color: #2c2c2c;
  color: #f1f1f1;
  transition: border 0.3s ease;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

export const Label = styled.label`
  font-size: 1.1rem;
  color: #ddd;
  font-weight: 600;
  text-align: center;
`;

export const ThresholdSlider = styled.input`
  width: 25%;
  -webkit-appearance: none;
  height: 10px;
  border-radius: 5px;
  background: #555;
  outline: none;
  opacity: 0.9;
  transition: opacity 0.3s, background 0.3s;

  &:hover {
    opacity: 1;
    background: #4caf50;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #4caf50;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s ease;
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
  padding: 12px 25px;
  font-size: 1.1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #81c784;
    transform: scale(1.05);
  }

  &:disabled {
    background-color: #666;
  }
`;

export const LoadingSpinner = styled.div`
  margin-left: 8px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4caf50;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const EnrichedPromptContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
  animation: ${slideIn} 0.5s ease-out;
`;

export const EnrichedPrompt = styled.div`
  width: 45%;
  background-color: #2c2c2c;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto; /* Adiciona margem automática para centralizar */
  position: relative; /* Para o botão ser posicionado no topo direito */

  h3 {
    color: #4caf50;
  }

  p {
    color: #f1f1f1;
  }
`;

export const CopyButton = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  padding: 8px 15px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #81c784;
  }
`;

export const ToggleDetailsButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #81c784;
  }
`;

export const Result = styled.div`
  max-height: 600px;
  overflow-y: auto;
  background-color: #222;
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h3 {
    margin-top: 0;
    font-size: 1.8rem;
    color: #4caf50;
    font-weight: 600;
  }

  strong {
    color: #f1f1f1;
    font-weight: bold;
  }

  pre {
    background-color: #111;
    padding: 15px;
    border-radius: 8px;
    overflow-x: auto;
    font-family: "Courier New", monospace;
    color: #ccc;
  }
`;

export const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 15px;
  border: 1px solid #f5c6cb;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
