import styled, { css } from 'styled-components';
import { COLORS } from '../../styles/globals';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 40rem;
  background-color: red;
  display: flex;
`;

export const Sidebar = styled.aside`
  flex: 0.2;
  background-color: ${COLORS.darkPurple};
  padding-top: 2rem;
`;

export const Main = styled.main`
  flex: 0.8;
  display: flex;
  flex-direction: column;
`;

export const UniverseExplorer = styled.div`
  background-color: green;
  height: 500px;
`;

export const StarInfo = styled.div`
  background-color: yellow;
  flex: 1;
  max-height: 300px;
`;

export const MapRules = css`
  .map-container {
    height: 500px;
  }
`;