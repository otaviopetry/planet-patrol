import styled from 'styled-components';
import { darken } from "polished";

import { COLORS } from '../../styles/globals';

export const Container = styled.div`
  width: 100%;
  padding: 2rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  background-color: ${COLORS.panelColor};
  color: #fff;
  text-align: center;
  margin-bottom: .75rem;
  position: relative;
  z-index: 100;
  border-radius: 2px;
  transition: all 0.2s ease-out;
  border: 1px solid #6a6a6a;

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    margin-bottom: 1rem;
    text-transform: uppercase;
    color: #7e5cdb;
  }

  a {
    color: #fff;
  }

  &:hover {
    background: ${darken(0.05, COLORS.panelColor)}
  }
`;
