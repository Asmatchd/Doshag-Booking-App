/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class drawerContentComponents extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require('../assets/mask.png')}
            style={{
              flex: 1,
              width: 280,
              justifyContent: 'center',
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 80, height: 80, borderRadius: 40}}
                source={require('../assets/sample/one.jpg')}
              />

              <View
                style={{
                  justifyContent: 'center',
                  padding: 5,
                  width: '40%',
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
                  Guest
                </Text>
                <Text style={{color: '#000'}}>Bahrain</Text>
              </View>

              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  width: '30%',
                }}
                onPress={() => this.props.navigation.navigate('Settings')}>
                <Icon
                  size={22}
                  style={styles.iconStyle}
                  color={'#000'}
                  name={'gear'}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.screenContainer}>
          <TouchableOpacity
            style={styles.screenStyle}
            onPress={() => this.props.navigation.navigate('LiveChat')}>
            <Icon
              size={14}
              style={styles.iconStyle}
              color={'silver'}
              name={'wechat'}
            />
            <Text> Live chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screenStyle}
            onPress={() => this.props.navigation.replace('LogIn')}>
            <Icon
              size={20}
              style={styles.iconStyle}
              color={'silver'}
              name={'sign-in'}
            />
            <Text>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.screenStyle}
            onPress={() => this.props.navigation.replace('LogIn')}>
            <Icon
              size={20}
              style={styles.iconStyle}
              color={'silver'}
              name={'sign-out'}
            />
            <Text>Sign out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    flexGrow: 3,
    // flex:1,
    // backgroundColor:'red',

    // height:'100%'
  },
  headerContainer: {
    flex: 1.0,
  },
  headerText: {
    color: '#fff8f8',
  },
  screenContainer: {
    paddingTop: 20,
    flex: 2,
  },
  screenStyle: {
    // height: 30,
    // backgroundColor:'pink',
    // marginTop: 2,
    // flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent:'center'
  },
  screenTextStyle: {
    fontSize: 20,
    marginLeft: 20,
  },
  iconStyle: {
    // padding:10
    marginRight: 20,
  },
});
