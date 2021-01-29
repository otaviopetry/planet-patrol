import React from 'react';

import { Container } from './styles';

function Panel ({title, info}) {
  return (
    <Container>
      <h3>{title}</h3>
      <p>{info}</p>
    </Container>
  );
};

export default Panel;
