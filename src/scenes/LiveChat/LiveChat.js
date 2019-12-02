/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useState, useEffect} from 'react';
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
import {
  Header,
  SearchBar,
  Tile,
  Text,
  Icon,
  ButtonGroup,
} from 'react-native-elements';
import {connect} from 'react-redux';
import ICON from 'react-native-vector-icons/Ionicons';
const logo = require('../../assets/logo.png');
const photo = require('../../assets/photo.png');
import {styles} from './styles';

const LiveChat = props => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const buttons = ['Open Tickets', 'Closed Tickets'];

  const selectButton = selected => {
    // console.warn(selected);
    setSelectedIndex(selected);
    switch (selected) {
      case 0:
        // setData(upcoming);
        break;
      case 1:
        // setData(drafted);
        break;

      default:
        break;
    }
  };

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
              Live Chat
            </Text>
          }
          rightComponent={
            <ICON
              name="ios-add-circle-outline"
              size={22}
              color="#fff"
              // onPress={() => props.navigation.goBack()}
            />
          }
        />

        <ButtonGroup
          onPress={selectButton}
          selectedIndex={selectedIndex}
          buttons={buttons}
          selectedButtonStyle={styles.btnGroupStyles}
          selectedTextStyle={styles.btnGroupSelectedText}
        />
      </SafeAreaView>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, {})(LiveChat);
