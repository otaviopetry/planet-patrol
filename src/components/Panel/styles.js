import styled from 'styled-components';

import { COLORS } from '../../styles/globals';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: ${COLORS.mainPurple};
  color: #fff;
  text-align: center;
  padding: 3rem 2rem;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    margin-bottom: 1rem;
  }
`;
