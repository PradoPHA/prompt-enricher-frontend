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
  padding: 1rem 1.25rem;
  min-height: 80px;
  flex-wrap: wrap;
  gap: 1rem;

  h1 {
    text-align: center;
    flex: 1;
    margin: 0;
    font-weight: 700;
    letter-spacing: 2px;
    font-family: "Roboto", sans-serif;
    font-size: clamp(1.2rem, 4vw, 2rem);
    line-height: 1.2;
    min-width: 0; /* Allow text to shrink */
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    
    img {
      width: auto;
      height: auto;
      max-width: 120px;
      max-height: 90px;
    }
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
    flex-shrink: 0;
  }

  .social-links a {
    color: #ffffff;
    font-size: 1.5rem;
    transition: transform 0.2s ease-in-out, color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 44px; /* Minimum touch target size */
    min-height: 44px;
  }

  .social-links a:hover {
    transform: scale(1.2);
    color: #4caf50;
  }

  /* Tablet styles */
  @media (max-width: 1024px) {
    padding: 0.875rem 1rem;
    
    h1 {
      font-size: clamp(1.1rem, 3.5vw, 1.8rem);
      letter-spacing: 1px;
    }
    
    .logo-container img {
      max-width: 100px;
      max-height: 75px;
    }
    
    .social-links {
      gap: 1.25rem;
    }
    
    .social-links a {
      font-size: 1.4rem;
    }
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    min-height: auto;
    text-align: center;
    
    .logo-container {
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      justify-content: center;
      
      img {
        max-width: 80px;
        max-height: 60px;
      }
    }
    
    h1 {
      font-size: clamp(1rem, 5vw, 1.5rem);
      text-align: center;
      flex: none;
      width: 100%;
      margin: 0.5rem 0;
      letter-spacing: 1px;
    }
    
    .social-links {
      justify-content: center;
      gap: 2rem;
      margin-top: 0.5rem;
    }
    
    .social-links a {
      font-size: 1.6rem;
    }
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    padding: 0.75rem;
    
    .logo-container img {
      max-width: 60px;
      max-height: 45px;
    }
    
    h1 {
      font-size: clamp(0.9rem, 4.5vw, 1.3rem);
      letter-spacing: 0.5px;
    }
    
    .social-links {
      gap: 1.5rem;
    }
    
    .social-links a {
      font-size: 1.4rem;
      min-width: 40px;
      min-height: 40px;
    }
  }

  /* Very small screens */
  @media (max-width: 320px) {
    .logo-container img {
      max-width: 50px;
      max-height: 38px;
    }
    
    h1 {
      font-size: 1rem;
    }
    
    .social-links a {
      font-size: 1.3rem;
    }
  }
`;
