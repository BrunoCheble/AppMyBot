import React from 'react';
import { Keyboard } from 'react-native';

import { BoxSearch, Search } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

const SearchService = ({ search, setSearch, loadServiceRequest }) => {

    handleSearch = (text) => {
        setSearch(text);
        if (text.length == 6) {
            loadServiceRequest(text);
        }
    }

    return (
        <BoxSearch>
            <Search
                placeholder="Número do seu Robô"
                underlineColorAndroid="transparent"
                onChangeText={(text) => handleSearch(text)}
                autoCapitalize="characters"
                value={search}
                onSubmitEditing={Keyboard.dismiss}
                maxLength={6}
            />
            <Icon style={{ padding: 10 }} name="search" size={20} color="#fff" />
        </BoxSearch>
    );
}

export default SearchService;
