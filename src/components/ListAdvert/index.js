import React from 'react';
import Moment from 'moment';

import { Linking, Image } from 'react-native';
import { List, Item, Link, Title, TextLink, Price, Subtitle } from './styles';

const ItemAdvert = ({ data }) => (
  <Item>
    <Link style={data.active ? { backgroundColor: '#54448c' } : { backgroundColor: '#333' }} onPress={() => Linking.openURL(data.link)}>
      {data.thumb != '' ? (<Image source={{ uri: data.thumb }} style={{ height: 200 }} />) : (<></>)}
      <Title>{data.title}</Title>
      <Subtitle>
        <Price>{data.last_price}</Price>
        <TextLink>{Moment.utc(data.createdAt).format('DD/MM/Y - HH:mm:ss')}</TextLink>
      </Subtitle>
    </Link>

  </Item >
);

const ListAdvert = ({ adverts }) => (
  <List
    keyboardShouldPersistrTaps="handle"
    data={adverts}
    keyExtractor={(item, index) => String(item._id)}
    renderItem={({ item, index }) => (
      <ItemAdvert data={item} index={index} />
    )}
  />
);

export default ListAdvert;