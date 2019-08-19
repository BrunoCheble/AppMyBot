import React, { useEffect, useState } from 'react';
import { Container, Input, BtnBack, TextBack, Btns, BtnAddFilter, TextAddFilter } from './styles';
import AsyncStorage from '@react-native-community/async-storage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ServiceActions from '~/store/ducks/services';
import FilterActions from '~/store/ducks/filters';

const Filter = ({ navigation, saveFilterRequest, loadServiceRequest }) => {

    const [title,setTitle] = useState('');
    const [url,setUrl] = useState('');
    const [service] = useState(navigation.getParam('service'));

    const handleSaveFilter = async () => {

        if(url == '' || title == '' || service == '') { 
            alert('Todos os campos são obrigatórios.');
        }
        else {
            saveFilterRequest({ url,  title, service });
            
            const value = await AsyncStorage.getItem('search');
            loadServiceRequest(value);

            navigation.navigate('Service');
        }
    }

    return (
        <Container>
            <Input
                placeholder="Título do Filtro"
                underlineColorAndroid="transparent"
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Input
                placeholder="URL"
                underlineColorAndroid="transparent"
                value={url}
                onChangeText={(text) => setUrl(text)}
            />
            <Btns>
                <BtnAddFilter onPress={() => handleSaveFilter()}>
                <TextAddFilter>Guardar</TextAddFilter>
                </BtnAddFilter>

                <BtnBack onPress={() => navigation.navigate('Service')}>
                <TextBack>Voltar</TextBack>
                </BtnBack>
            </Btns>
            
        </Container>
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, FilterActions, ServiceActions), dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Filter);
