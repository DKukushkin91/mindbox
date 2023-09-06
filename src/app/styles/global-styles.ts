import {createGlobalStyle} from 'styled-components';
import {ColorsStyles} from './colors';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  &:root {
    ${ColorsStyles}
  }
  
  html {
    font-size: calc(1vw / 12.8);
    
    @media screen and (max-width: 1279px) {
      font-size: calc(1vw / 7.68);
    }

    @media screen and (max-width: 750px) {
      font-size: calc(1vw / 3.75);
    }
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 14rem;
    font-weight: 400;
    line-height: 1.4;
    color: var(--color-text-primary);
    scroll-behavior: smooth;
    margin: 0;
    background: var(--color-gray-light);
  }
`;
