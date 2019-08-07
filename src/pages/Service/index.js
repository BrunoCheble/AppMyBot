import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ServiceActions from '~/store/ducks/services';

import ItemFilter from '~/components/Filter';

import {
  Container, List, Header, Emails, Interval
} from './styles';

const Service = ({ service, loadServiceRequest }) => {
  useEffect(() => {
    loadServiceRequest(null);
  }, []);

  return (
    <Container>
      <Header>
        <Emails>Emails: {service.data.emails}</Emails>
        <Interval>Intervalo aprox.: {service.data.interval}</Interval>
      </Header>
      <List
        keyboardShouldPersistrTaps="handle"
        data={service.filters}
        keyExtractor={(item, index) => String(item._id)}
        renderItem={({ item, index }) => (
          <ItemFilter data={item} index={index} />
        )}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  service: state.service,
});

const mapDispatchToProps = dispatch => bindActionCreators(ServiceActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Service);
