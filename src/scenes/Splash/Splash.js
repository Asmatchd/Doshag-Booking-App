import React, {Fragment, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  View,
  ImageBackground,
} from 'react-native';
import {Header, SearchBar, Tile, Text, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
const logo = require('../../assets/logo.png');
const photo = require('../../assets/photo.png');
import {styles} from './styles';

const bg = require('../../assets/bg.jpg');

const Splash = props => {
  const {navigation} = props;
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Options');
    }, 1500);
  }, []);
  return (
    <ImageBackground source={bg} style={styles.container}>
      <SafeAreaView />
      <Image
        style={styles.logoImage}
        resizeMode="contain"
        source={require('../../assets/logo/splash_logo.png')}
      />
    </ImageBackground>
  );
};

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, {})(Splash);
