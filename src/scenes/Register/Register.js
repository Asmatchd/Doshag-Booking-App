/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
  Text,
  ImageBackground,
} from 'react-native';
import {Header, SearchBar, Tile, Icon, Button} from 'react-native-elements';
import ICON from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import {styles} from './styles';
const bg = require('../../assets/bg.jpg');
const Register = props => {
  const {navigation} = props;

  const [modalVisible, setModalVisible] = useState(false);
  const [forgetModal, setForgetModal] = useState(false);
  const [value, setValue] = useState('+973');
  const [cc, setCc] = useState('BH');

  useEffect(() => {
    // setTimeout(() => {
    //   // navigation.replace('login');
    // }, 3000);
  }, []);

  const data = [
    {
      cc: 'BH',
      code: '+973',
    },
    {
      cc: 'SA',
      code: '+966',
    },
    {
      cc: 'KW',
      code: '+965',
    },
    {
      cc: 'AE',
      code: '+971',
    },
    {
      cc: 'QA',
      code: '+974',
    },
    {
      cc: 'OM',
      code: '+968',
    },
  ];

  const renderItemDesign = item => (
    <TouchableOpacity
      style={{
        padding: 15,
        borderBottomWidth: 1,
        borderColor: 'rgb(192,192,192)',
      }}
      onPress={() => {
        setValue(item.code);
        setCc(item.cc);
        setModalVisible(false);
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 18,
        }}>
        {item.cc} {item.code}
      </Text>
    </TouchableOpacity>
  );
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.MainContainer}>
      <ImageBackground source={bg} style={styles.container}>
        <SafeAreaView />

        <Header
          leftComponent={
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                // justifyContent: 'center',
              }}
              onPress={() => props.navigation.goBack()}>
              <View
                style={{
                  justifyContent: 'center',
                }}>
                <ICON name="md-arrow-back" size={20} color="#fff" />
              </View>
              <Text style={{color: '#fff', paddingLeft: 15, fontSize: 18}}>
                Back
              </Text>
            </TouchableOpacity>
          }
        />
        <View
          style={{
            alignItems: 'center',
            paddingTop: 30,
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
          {/* first name */}
          <View style={styles.inputContainer}>
            <View style={styles.icContainer}>
              <ICON name="md-person" size={18} color="rgba(0,0,0,0.4)" />
            </View>
            <TextInput
              style={styles.textInputContainer}
              placeholder={'FIrst Name'}
            />
          </View>

          {/* last name */}
          <View style={styles.inputContainer}>
            <View style={styles.icContainer}>
              <ICON name="md-person" size={18} color="rgba(0,0,0,0.4)" />
            </View>
            <TextInput
              style={styles.textInputContainer}
              placeholder={'Last Name'}
            />
          </View>

          {/* phone number */}
          <View style={styles.inputContainer}>
            <View style={styles.icContainer}>
              <MaterialCommunityIcons
                name="phone"
                size={18}
                color="rgba(0,0,0,0.4)"
              />
            </View>

            <View
              style={{
                width: '20%',
                justifyContent: 'center',
                // padding: 4,
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 2,
                  paddingTop: 4,
                  borderWidth: 1,
                  borderColor: 'rgba(0,0,0,0.3)',
                  borderRadius: 3,
                }}
                onPress={() => setModalVisible(true)}>
                <Text
                  style={{
                    fontSize: 10,
                    paddingTop: 1,
                  }}>
                  {cc} {value}
                </Text>
                <ICON
                  name="md-arrow-dropdown"
                  size={18}
                  color="rgba(0,0,0,1)"
                />
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.phoneInputContainer}
              placeholder={'Phone'}
            />
          </View>

          {/* Email  */}
          <View style={styles.inputContainer}>
            <View style={styles.icContainer}>
              <MaterialCommunityIcons
                name="email"
                size={18}
                color="rgba(0,0,0,0.4)"
              />
            </View>
            <TextInput
              style={styles.textInputContainer}
              placeholder={'Email'}
            />
          </View>

          {/* password  */}
          <View style={styles.inputContainer}>
            <View style={styles.icContainer}>
              <ICON name="ios-lock" size={18} color="rgba(0,0,0,0.4)" />
            </View>
            <TextInput
              style={styles.textInputContainer}
              placeholder={'Password'}
              secureTextEntry
            />
          </View>

          <Button
            // buttonStyle={{backgroundColor: '#fff'}}
            title="Register"
            color="#000"
            activeOpacity={1}
            underlayColor="transparent"
            // onPress={() => {
            //   props.navigation.navigate('drawerNav');
            // }}
          />
        </View>
      </ImageBackground>
      {/* phone code modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View
          style={{
            flex: 1,
            // backgroundColor: '#faf',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              // height: '60%',
              width: '80%',
              backgroundColor: 'grey',
              // padding: 10,
            }}>
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => renderItemDesign(item)}
            />
          </View>
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, {})(Register);
