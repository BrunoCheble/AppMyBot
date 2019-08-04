import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ItemFilter from '~/components/Filter';

import {
  Container, Form, Input, Submit, List,
} from './styles';

const Filter = () => (
  <Container>
    <Form>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Procurar serviço..."
      />
      <Submit>
        <Icon name="add" font-size={22} color="#FFF" />
      </Submit>
    </Form>

    <List
      keyboardShouldPersistrTaps="handle"
      data={[
        {
          id: 1, name: 'bruno', stars: 120, forks: 231, description: 'ok ok ok',
        },
      ]}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <ItemFilter data={item} />
      )}
    />
  </Container>
);

export default Filter;
