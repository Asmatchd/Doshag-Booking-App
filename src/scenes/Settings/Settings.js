/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import {Header, SearchBar, Tile, Text, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import ICON from 'react-native-vector-icons/Ionicons';
const logo = require('../../assets/logo.png');
const photo = require('../../assets/photo.png');
import {styles} from './styles';

const Settings = props => {
  const data = [
    {
      value: 'Bahrain',
    },
  ];
  const language = [
    {
      value: 'English',
    },
    {
      value: 'Arabic',
    },
  ];

  return (
    <Fragment>
      <SafeAreaView>
        <Header
          leftComponent={
            <ICON
              name="md-arrow-back"
              size={20}
              color="#fff"
              onPress={() => props.navigation.goBack()}
            />
          }
          centerComponent={
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
              }}>
              Settings
            </Text>
          }
        />

        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderBottomColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              padding: 15,
              width: '60%',
            }}>
            <Text
              style={{
                fontSize: 16,
              }}>
              Country
            </Text>
          </View>

          <View
            style={{
              width: '40%',
              justifyContent: 'center',
              height: 30,
            }}>
            <Dropdown data={data} />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderBottomColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              padding: 15,
              width: '60%',
            }}>
            <Text
              style={{
                fontSize: 16,
              }}>
              Language
            </Text>
          </View>

          <View
            style={{
              width: '40%',
              justifyContent: 'center',
              height: 30,
            }}>
            <Dropdown data={language} />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, {})(Settings);
