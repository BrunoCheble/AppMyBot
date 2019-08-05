import React from 'react';
import Moment from 'moment';
import { Container, Name, Description } from './styles';

export default function ItemFilter({ data }) {
  return (

    <Container>
      <Name>{data.title}</Name>
      <Description>{Moment(data.updatedAt).format('DD/MM/Y - hh:mm:ss')}</Description>
    </Container>
  );
}
