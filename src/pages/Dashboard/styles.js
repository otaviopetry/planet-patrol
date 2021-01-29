import styled, { css } from 'styled-components';
import { COLORS } from '../../styles/globals';

export const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  align-items: center;
`;

export const Sidebar = styled.aside`
  width: 20rem;
  background-color: ${COLORS.darkPurple};
  padding-top: 2rem;
`;

export const Main = styled.main`
  flex: 0.8;
  display: flex;
  flex-direction: column;
`;