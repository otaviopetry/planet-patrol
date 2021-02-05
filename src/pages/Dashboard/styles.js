import styled from 'styled-components';
import { COLORS } from '../../styles/globals';

export const Header = styled.div`
  width: 100%;
  background-color: #f0f0f5;
  padding: .5rem 0;
  position: fixed;
  z-index: 10000;
  display: flex;

  @media (max-width: 720px) {
    padding: 1rem 0;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  min-width: 520px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 720px) {
    width: 90%;
    justify-content: space-between;
  }
`;

export const HeaderTitle = styled.h1`
  font-weight: bolder;
  font-size: 1.4rem;
  color: ${COLORS.mainPurple};
  text-align: center;
  margin-right: 2rem;

  @media (max-width: 720px) {
    text-align: left;
  }
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

  @media (max-width: 720px) {
    order: 3;
    width: 100%;
    justify-content: space-between;
    margin-top: .5rem;
  }
  
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

export const StarCount = styled.div`
  margin-left: 2rem;
  color: #555;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  padding-top: 56px;
  padding: 56px 1rem 1rem;
  justify-content: space-between;
  align-items: stretch;
  z-index: 10;
  min-width: 520px;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 729px) {
    padding-top: 114px;
  }
`;

export const Sidebar = styled.aside`
  width: 20%;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const TheMap = styled.div`
  background-color: ${COLORS.panelColor};
  width: 79%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #6a6a6a;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ZooniverseBox = styled.div`
  background-color: ${COLORS.panelColor};
  width: 100%;
  text-align: center;
  padding: 0.7rem 0;
  order: 2;

  a {
    height: 1.5rem;
  }

  img {
    width: 50%;
    margin: 0 auto;
  }

  @media (max-width: 900px) {
    margin-bottom: 0.75rem;
    padding: 0.35rem 0;
    order: 0;

    img {
      max-width: 100px;
    }
  }
`;