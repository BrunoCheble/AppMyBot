import React from 'react';
import Moment from 'moment';
import { Container, Name, Description } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ItemFilter({ data }) {
  return (

    <Container>
      <Name>{data.title}</Name>
      <Footer>
        <Description>{Moment(data.updatedAt).format('DD/MM/Y - hh:mm:ss')}</Description>
        <Links>
          <Icon name="add" font-size={22} color="#FFF" /> 7
        </Links>
      </Footer>
    </Container>
  );
}
