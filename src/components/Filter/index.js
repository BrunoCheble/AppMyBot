import React from 'react';

import { Container, Name, Description } from './styles';

export default function ItemFilter({ data }) {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
    </Container>
  );
}
