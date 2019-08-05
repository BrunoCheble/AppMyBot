import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FilterActions from '~/store/ducks/filters';

import ItemFilter from '~/components/Filter';

import {
  Container, Form, Input, Submit, List,
} from './styles';

const Filter = ({ filters, loadFilterRequest }) => {
  useEffect(() => {
    loadFilterRequest();
  }, []);

  return (
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
        data={filters}
        keyExtractor={(item, index) => String(item._id)}
        renderItem={({ item, index }) => (
          <ItemFilter data={item} index={index} />
        )}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  filters: state.filter.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(FilterActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
