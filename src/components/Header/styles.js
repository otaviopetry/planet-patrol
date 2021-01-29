import styled from 'styled-components';
import { COLORS } from '../../styles/globals';

export const Container = styled.header`
  width: 100%;
  background-color: #f0f0f5;
  padding: 1.25rem;
`;

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-weight: bolder;
  font-size: 1.4rem;
  color: ${COLORS.mainPurple};
  text-align: center;
`;
