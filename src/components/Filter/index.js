import React from 'react';
import Moment from 'moment';
import { Container, Name, Description, Footer, Links, QttLinks, Item } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ItemFilter = ({ data, handleModalFilter }) => {

  const actives = data.adverts.filter((advert) => advert.active);

  return (
    <Container>
      <Item onPress={() => handleModalFilter(data.adverts)}>
        <Name>{data.title}</Name>
        <Footer>
          <Links>
            <QttLinks>{actives.length + '/' + data.adverts.length}</QttLinks>
            <Icon name="star" font-size={22} color="#2793e6" />
          </Links>
          <Description>{actives.length > 0 ? Moment.utc(actives[0].updatedAt).format('DD/MM/Y - HH:mm:ss') : ''}</Description>
        </Footer>
      </Item>
    </Container>
  );
}

export default ItemFilter;