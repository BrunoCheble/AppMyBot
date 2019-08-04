import React from 'react';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = props => (
  <ImageBackground
    source={{
      uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
    }}
    style={styles.container}
    resizeMode="cover"
  >
    <Image
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png',
      }}
      style={styles.logo}
      resizeMode="contain"
    />
    <Text style={styles.welcome}>Bem-vindo ao Template Avançado!</Text>
    <TouchableOpacity onPress={() => props.navigation.navigate('Filter')}>
      <Text>Buscar Serviço</Text>
    </TouchableOpacity>
  </ImageBackground>
);

export default Main;
