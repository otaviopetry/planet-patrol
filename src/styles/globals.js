import { createGlobalStyle } from 'styled-components';

export const COLORS = {
  mainPurple: '#3c3382',
  brightPurple: '#7498cf',
  mediumPuple: '#182365',
  darkPurple: '#0b1435',
  pink: '#aa68bf',
};

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 1rem Ubuntu, sans-serif;
    color: #333;
  }

  button {
    cursor: pointer;
  }

  .map-container {
    min-height: 500px;
    width: 100%;
  }
`;