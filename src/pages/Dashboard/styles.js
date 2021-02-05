import styled from 'styled-components';
import { COLORS } from '../../styles/globals';

export const Header = styled.div`
  width: 100%;
  background-color: #f0f0f5;
  height: 40px;
  padding: .5rem 0;
  position: fixed;
  z-index: 10000;
  display: flex;
`;
export const HeaderWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-weight: bolder;
  font-size: 1.4rem;
  color: ${COLORS.mainPurple};
  text-align: center;
`;

export const SearchStar = styled.div`
  height: 32px;
  background-color: #fff;
  color: #333;
  border-radius: 0.5rem;
  font-size: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 0.5rem;
  
  input {
    border: 0;
    outline: 0;
    background-color: #fff;
    color: #555;
    padding-right: .5rem;
  }

  svg {
    color: #555;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding-top: 56px;
  padding: 56px 1rem 1rem;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 10;
`;

export const Sidebar = styled.aside`
  width: 20rem;
`;