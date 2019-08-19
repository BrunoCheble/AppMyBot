import React, { useEffect, useState } from 'react';
import { Container, List, Header, Emails, Interval, Date, BtnBackModal, TextBackModal, BtnAddFilter, TextAddFilter } from './styles';
import AsyncStorage from '@react-native-community/async-storage';

import { ImageBackground, RefreshControl, Modal } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ServiceActions from '~/store/ducks/services';

import ItemFilter from '~/components/Filter';
import SearchService from '~/components/SearchService';
import ListAdvert from '~/components/ListAdvert';

import Moment from 'moment';

const Service = ({ navigation, service, loadServiceRequest }) => {

  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [adverts, setAdverts] = useState([]);

  handleModalFilter = (adverts) => {
    setModalVisible(true);
    setAdverts(adverts);
  }
  _onRefresh = () => {
    setRefreshing(true);
    verifySavedSearch();
    setRefreshing(false);
  }

  verifySavedSearch = async () => {
    const value = await AsyncStorage.getItem('search');

    if (value !== null) {
      setSearch(value);
      loadServiceRequest(value);
    }
  }

  useEffect(() => {
    //
    verifySavedSearch();
  }, []);


  return (
    <ImageBackground
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
      }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => { }}>
        <ListAdvert adverts={adverts} />
        <BtnBackModal onPress={() => { setModalVisible(false); }}>
          <TextBackModal>Voltar</TextBackModal>
        </BtnBackModal>
      </Modal>
      <Container>
        <SearchService search={search} setSearch={setSearch} loadServiceRequest={loadServiceRequest} />
        {
          service.updatedAt != null ? (
            <Header>
              <Date>Última atualização: {Moment.utc(service.updatedAt).format('DD/MM/Y - HH:mm:ss')}</Date>
              <Interval>Intervalo aprox.: {service.interval / 60} min</Interval>
              <Emails>Emails: {service.emails}</Emails>
            </Header>
          ) : (<></>)
        }
        <List
          keyboardShouldPersistrTaps="handle"
          data={service.filters}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={_onRefresh}
            />
          }
          keyExtractor={(item, index) => String(item._id)}
          renderItem={({ item, index }) => (
            <ItemFilter handleModalFilter={handleModalFilter} data={item} index={index} />
          )}
        />
        {
          service.updatedAt != null ? (
            <BtnAddFilter onPress={() => navigation.navigate('Filter', { service: service._id })}>
              <TextAddFilter>Adicionar Filtro</TextAddFilter>
            </BtnAddFilter>
          ) : (<></>)
        }
      </Container>
    </ImageBackground>
  );
};

const mapStateToProps = state => ({
  service: state.service.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(ServiceActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Service);
