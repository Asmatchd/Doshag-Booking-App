/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  Header,
  SearchBar,
  Tile,
  Text,
  Icon,
  Button,
} from 'react-native-elements';
import {connect} from 'react-redux';
import {styles} from './styles';
const bg = require('../../assets/bg.jpg');

const Options = props => {
  const {navigation} = props;
  useEffect(() => {
    // setTimeout(() => {
    //   // navigation.replace('login');
    // }, 3000);
  }, []);
  return (
    <ImageBackground source={bg} style={styles.container}>
      <SafeAreaView />
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={styles.logoImage}
          resizeMode="contain"
          source={require('../../assets/logo/splash_logo.png')}
        />
      </View>
      <View
        style={{
          padding: 20,
        }}>
        <Button
          // buttonStyle={{backgroundColor: '#fff'}}
          title="LOG IN"
          color="#000"
          activeOpacity={1}
          underlayColor="transparent"
          onPress={() => {
            props.navigation.navigate('LogIn');
          }}
        />

        <Button
          title="Register"
          activeOpacity={1}
          underlayColor="transparent"
          onPress={() => {
            props.navigation.navigate('Register');
          }}
        />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 10,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: '#fff',
              }}>
              Arabic
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('drawerNav')}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: '#fff',
              }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, {})(Options);
