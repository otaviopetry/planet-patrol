import styled from 'styled-components';
import { darken } from "polished";

import { COLORS } from '../../styles/globals';

export const Container = styled.div`
  width: 48%;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  background-color: ${COLORS.mainPurple};
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 100;
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.5);
  transition: all 0.2s ease-out;

  @media (min-width: 800px) {
    width: 24%;
    padding: 3.5rem 1.25rem;
  }

  @media (min-width: 1300px) {
    width: 100%;
    padding: 3.5rem 1.25rem;
  }

  &::before {
    content: '';
    width: 95%;
    height: 6px;
    background-color: ${COLORS.brightPurple};
    position: absolute;
    bottom: -6px;
    left: 2.5%;
    z-index: -100;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &::after {
    content: '';
    width: 90%;
    height: 6px;
    background-color: ${COLORS.pink};
    position: absolute;
    bottom: -12px;
    left: 5%;
    z-index: -100;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  a {
    color: #fff;
  }

  &:hover {
    background: ${darken(0.05, COLORS.mainPurple)}
  }
`;
