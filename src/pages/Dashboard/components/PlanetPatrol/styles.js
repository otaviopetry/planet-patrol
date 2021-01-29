import styled, { css } from 'styled-components';
import { COLORS } from '../../../../styles/globals';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  min-height: 40rem;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  flex-wrap: wrap;

  @media (min-width: 1300px) {
    justify-content: space-between;    
  }
`;

export const Sidebar = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: row wrap;
  justify-content: flex-start;

  @media (min-width: 1300px) {
    flex-direction: column;
    width: 25rem;
  }
`;

export const StarInfo = styled.div`
  flex: 1;
  max-height: 300px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #F0F0F5;
  
  display: flex;
  justify-content: center;
  align-items: center;

  #currentStar {
    text-align: center;
    font-size: 1.5rem;
  }
`;