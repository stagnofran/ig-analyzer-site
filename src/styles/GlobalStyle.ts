import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    background-image:
      radial-gradient(ellipse 80% 50% at 50% -20%, rgba(214,41,118,0.15), transparent),
      radial-gradient(ellipse 60% 40% at 80% 30%, rgba(150,47,191,0.10), transparent);
    background-attachment: fixed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1.2;
    font-weight: 700;
  }

  p { margin: 0; }

  ::selection {
    background: ${({ theme }) => theme.colors.accentPink};
    color: white;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.bg};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.borderStrong};
  }
`;
