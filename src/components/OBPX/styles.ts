import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1.25rem;
  padding-top: 3.125rem;
  padding-bottom: 40vh;
  background-color: #121212;
  color: #f1f1f1;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px); /* Account for header height */
  box-sizing: border-box;

  /* Tablet styles */
  @media (max-width: 1024px) {
    padding: 1rem;
    padding-top: 2rem;
    padding-bottom: 30vh;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    padding: 0.75rem;
    padding-top: 1.5rem;
    padding-bottom: 20vh;
    min-height: calc(100vh - 120px); /* Account for mobile header height */
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    padding: 0.5rem;
    padding-top: 1rem;
    padding-bottom: 15vh;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 1.875rem;
  width: 100%;
  max-width: 800px;

  h1 {
    font-size: clamp(2rem, 6vw, 3rem);
    font-weight: 700;
    color: #4caf50;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  h2 {
    font-size: clamp(1rem, 3vw, 1.3rem);
    color: #bbb;
    line-height: 1.6;
    padding: 0 1rem;
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

  /* Mobile styles */
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    
    h1 {
      letter-spacing: 1px;
    }
    
    h2 {
      padding: 0 0.5rem;
    }
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    margin-bottom: 1rem;
    
    h1 {
      letter-spacing: 0.5px;
    }
    
    h2 {
      padding: 0 0.25rem;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9375rem;
  width: 100%;
  max-width: 600px;
  padding: 0 1rem;

  /* Mobile styles */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 0.5rem;
    gap: 1rem;
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    padding: 0 0.25rem;
    gap: 0.75rem;
  }
`;

export const Textarea = styled.textarea`
  width: 90%;
  height: 150px;
  padding: 0.9375rem;
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  border: 2px solid #444;
  border-radius: 12px;
  background-color: #2c2c2c;
  color: #f1f1f1;
  transition: border 0.3s ease;
  resize: vertical;
  font-family: inherit;
  line-height: 1.4;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    width: 95%;
    height: 120px;
    padding: 0.75rem;
    border-radius: 8px;
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    width: 98%;
    height: 100px;
    padding: 0.625rem;
    font-size: 1rem;
  }
`;

export const Label = styled.label`
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  color: #ddd;
  font-weight: 600;
  text-align: center;
  padding: 0 1rem;

  /* Mobile styles */
  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    padding: 0 0.25rem;
  }
`;

export const ThresholdSlider = styled.input`
  width: 25%;
  min-width: 150px;
  max-width: 300px;
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
    border: none;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    width: 60%;
    min-width: 200px;
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    width: 80%;
    min-width: 150px;
    height: 12px;
    
    &::-webkit-slider-thumb {
      width: 24px;
      height: 24px;
    }
    
    &::-moz-range-thumb {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5625rem;
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px; /* Minimum touch target size */
  min-width: 120px;
  font-weight: 500;

  &:hover {
    background-color: #81c784;
    transform: scale(1.05);
  }

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
    transform: none;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    padding: 0.875rem 1.75rem;
    min-width: 140px;
    border-radius: 8px;
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    padding: 1rem 2rem;
    min-width: 160px;
    font-size: 1rem;
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

  /* Mobile styles */
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    border-width: 3px;
    margin-left: 6px;
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
  margin-top: 1.25rem;
  animation: ${slideIn} 0.5s ease-out;
  gap: 1rem;

  /* Tablet styles */
  @media (max-width: 1024px) {
    width: 95%;
    gap: 0.75rem;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    align-items: center;
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    width: 100%;
    margin-top: 1rem;
    gap: 0.75rem;
  }
`;

export const EnrichedPrompt = styled.div`
  width: 45%;
  background-color: #2c2c2c;
  padding: 0.9375rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  position: relative;

  h3 {
    color: #4caf50;
    font-size: clamp(1rem, 3vw, 1.2rem);
    margin-bottom: 0.75rem;
    padding-right: 3rem; /* Space for copy button */
  }

  p {
    color: #f1f1f1;
    line-height: 1.5;
    font-size: clamp(0.85rem, 2.5vw, 1rem);
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    padding: 1rem;
    border-radius: 8px;
    
    h3 {
      padding-right: 2.5rem;
    }
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    padding: 0.75rem;
    
    h3 {
      padding-right: 2rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const CopyButton = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: clamp(0.8rem, 2vw, 1rem);
  padding: 0.5rem 0.9375rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  position: absolute;
  top: 0.9375rem;
  right: 0.9375rem;
  transition: background-color 0.3s ease;
  min-height: 36px;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #81c784;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    min-height: 32px;
    min-width: 50px;
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    top: 0.75rem;
    right: 0.75rem;
    padding: 0.375rem 0.625rem;
    min-height: 28px;
    min-width: 45px;
    font-size: 0.8rem;
  }
`;

export const ToggleDetailsButton = styled.button`
  margin-top: 1.25rem;
  padding: 0.625rem 1.25rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  min-height: 44px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #81c784;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    margin-top: 0.75rem;
    padding: 0.875rem 1.75rem;
    width: 100%;
    max-width: 300px;
  }
`;

export const Result = styled.div`
  max-height: 600px;
  overflow-y: auto;
  background-color: #222;
  padding: 1.25rem;
  border-radius: 10px;
  margin-top: 1.875rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;

  h3 {
    margin-top: 0;
    font-size: clamp(1.2rem, 4vw, 1.8rem);
    color: #4caf50;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  strong {
    color: #f1f1f1;
    font-weight: bold;
  }

  pre {
    background-color: #111;
    padding: 0.9375rem;
    border-radius: 8px;
    overflow-x: auto;
    font-family: "Courier New", monospace;
    color: #ccc;
    font-size: clamp(0.75rem, 2vw, 0.9rem);
    line-height: 1.4;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 1.5rem;
    border-radius: 8px;
    max-height: 500px;
    
    pre {
      padding: 0.75rem;
      font-size: 0.8rem;
    }
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    padding: 0.75rem;
    margin-top: 1rem;
    max-height: 400px;
    
    pre {
      padding: 0.5rem;
      font-size: 0.75rem;
    }
  }
`;

export const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 0.9375rem;
  border: 1px solid #f5c6cb;
  border-radius: 10px;
  margin-top: 1.25rem;
  text-align: center;
  font-weight: bold;
  animation: fadeIn 0.5s ease-in-out;
  width: 100%;
  max-width: 600px;
  font-size: clamp(0.9rem, 2.5vw, 1rem);

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    padding: 0.75rem;
    margin-top: 1rem;
    border-radius: 8px;
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    padding: 0.625rem;
    margin-top: 0.75rem;
  }
`;
