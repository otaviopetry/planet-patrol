import styled from 'styled-components';
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