import styled from 'styled-components';
import { COLORS } from '../../styles/globals';

export const Header = styled.div`
  width: 100%;
  background-color: #f0f0f5;
  padding: 1.25rem;
`;
export const HeaderWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-weight: bolder;
  font-size: 1.4rem;
  color: ${COLORS.mainPurple};
  text-align: center;
`;

export const SearchField = styled.input`
  width: 15rem;
  height: 32px;
  background-color: #fff;
  color: #333;
  border-radius: 0.5rem;
  font-size: 1.25rem;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Sidebar = styled.aside`
  width: 20rem;
  background-color: ${COLORS.darkPurple};
  padding-top: 2rem;
`;