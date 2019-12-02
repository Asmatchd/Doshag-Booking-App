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
import {Header, SearchBar, Tile, Text, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import ICON from 'react-native-vector-icons/Ionicons';
const logo = require('../../assets/logo.png');
const photo = require('../../assets/photo.png');
import {styles} from './styles';
const Home = props => {
  const renderItemDesign = item => (
    <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
      <ImageBackground
        source={item.bg}
        style={{
          // height: '70%',
          width: '100%',
        }}>
        {/* top view */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            paddingBottom: 40,
          }}>
          {item.offer === true ? (
            <Image
              style={{height: 50, width: 40, marginTop: -13}}
              resizeMode="contain"
              source={require('../../assets/sample/offer.png')}
            />
          ) : (
            <View />
          )}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#00ffff',
                padding: 3,
                borderRadius: 5,
              }}>
              <Text style={{fontSize: 12}}>{item.size}</Text>
            </View>
          </View>
        </View>

        {/* bottom view */}

        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingTop: 40,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 25,
                color: '#fff',
              }}>
              {item.name}
            </Text>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 12, color: '#fff'}}>Startting From</Text>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
              }}>
              {item.location}
            </Text>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 20, color: '#fff'}}>
                {item.price} BHD
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const data = [
    {
      name: 'KA',
      price: '35',
      bg: require('../../assets/sample/one.jpg'),
      size: '10*10',
      offer: true,
      location: 'Hamala',
    },
    {
      name: 'Retaj',
      price: '60',
      bg: require('../../assets/sample/two.jpg'),
      size: '15*10',
      offer: false,
      location: 'Hamad Town',
    },
    {
      name: 'Saar',
      price: '30',
      bg: require('../../assets/sample/three.jpg'),
      size: '20*15',
      offer: true,
      location: 'Hamala',
    },
    {
      name: 'Gardenia',
      price: '80',
      bg: require('../../assets/sample/four.jpg'),
      size: '30*30',
      offer: true,
      location: 'Sarra',
    },
    {
      name: 'smart',
      price: '40',
      bg: require('../../assets/sample/five.jpg'),
      size: '10*10',
      offer: false,
      location: 'Hamala',
    },
  ];

  return (
    <Fragment>
      <SafeAreaView>
        <Header
          leftComponent={
            <TouchableOpacity
              style={styles.headerContainers}
              onPress={() => props.navigation.openDrawer()}>
              <Icon name="menuunfold" type="antdesign" color="#fff" />
            </TouchableOpacity>
          }
          centerComponent={
            <View>
              <Image
                style={{height: 50, width: 50}}
                resizeMode="contain"
                source={require('../../assets/logo/splash_logo.png')}
              />
            </View>
          }
          rightComponent={
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{paddingRight: 25}}>
                <ICON name="ios-search" size={22} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <ICON name="ios-options" size={22} color="#fff" />
              </TouchableOpacity>
            </View>
          }
        />
        <View
          style={{
            height: '87.3%',
          }}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => renderItemDesign(item)}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, {})(Home);
