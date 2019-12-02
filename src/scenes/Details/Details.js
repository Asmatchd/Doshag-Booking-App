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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import ICON from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const logo = require('../../assets/logo.png');
const photo = require('../../assets/photo.png');
import {styles} from './styles';

const Details = props => {
  const [show, setShow] = useState(false);
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 2}}>
      <View style={{flex: 1}}>
        <SafeAreaView />
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
              KA
            </Text>
          }
        />
        <View>
          <Image
            source={require('../../assets/sample/four.jpg')}
            style={{
              width: '100%',
              height: 150,
            }}
            // resizeMode={'contain'}
          />
        </View>

        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              marginTop: -20,
              borderColor: 'rgba(0,0,0,0.05)',
              borderBottomWidth: 3,
              borderWidth: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'rgba(0,0,0,0.3)',
                borderBottomWidth: 0.5,
                padding: 5,
              }}>
              {/* left */}
              <View
                style={{
                  width: '10%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,
                }}>
                <ICON name="ios-pin" size={25} color="#000" />
              </View>

              {/* center */}
              <View
                style={{
                  width: '66%',
                  justifyContent: 'center',
                  padding: 5,
                  paddingLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'rgba(0,0,0,0.7)',
                  }}>
                  Hamala
                </Text>
              </View>

              {/* right */}
              <View
                style={{
                  width: '20%',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#3E5996',
                    padding: 5,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#fff',
                    }}>
                    View Map
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* icons */}
            <View
              style={{
                padding: 8,
              }}>
              <View
                style={{
                  // backgroundColor: '#faf',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <MaterialCommunityIcons name="sofa" size={25} color="#3E5996" />
                <MaterialCommunityIcons
                  name="silverware-fork-knife"
                  size={25}
                  color="#3E5996"
                />
                <ICON name="ios-bed" size={25} color="#3E5996" />
                <ICON name="md-tv" size={25} color="#3E5996" />

                <FontAwesome5 name="restroom" size={25} color="#3E5996" />
                <FontAwesome5 name="baby" size={25} color="#3E5996" />
              </View>

              <View
                style={{
                  // backgroundColor: '#faf',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <MaterialCommunityIcons
                  name="speaker"
                  size={25}
                  color="#3E5996"
                />
                <MaterialCommunityIcons
                  name="stairs"
                  size={25}
                  color="#3E5996"
                />

                <ICON name="ios-cart" size={25} color="#3E5996" />
                <ICON name="ios-bonfire" size={25} color="#3E5996" />
                <FontAwesome5 name="shower" size={25} color="#3E5996" />
                <FontAwesome5 name="bath" size={25} color="#3E5996" />
              </View>
            </View>

            {/* times */}
            <View
              style={{
                // backgroundColor: '#faf',
                flexDirection: 'row',
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              <View
                style={{
                  // backgroundColor: '#254',
                  width: '50%',
                  borderRightColor: 'rgba(0,0,0,0.3)',
                  borderRightWidth: 1,
                }}>
                {/* morning */}
                <View
                  style={{
                    // backgroundColor: '#254',
                    // height: '50%',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      // backgroundColor: '#254',
                      width: '30%',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                      padding: 5,
                    }}>
                    <ICON name="ios-sunny" size={20} color="orange" />
                  </View>

                  <View
                    style={{
                      // backgroundColor: '#123',
                      width: '70%',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-start',
                      padding: 5,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>: 8AM to 5Pm</Text>
                  </View>
                </View>

                {/* evening */}
                <View
                  style={{
                    // backgroundColor: '#254',
                    // height: '50%',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      // backgroundColor: '#254',
                      width: '30%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-end',
                      padding: 5,
                    }}>
                    <ICON name="ios-moon" size={20} color="#000" />
                  </View>

                  <View
                    style={{
                      // backgroundColor: '#123',
                      width: '70%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      padding: 5,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>: 8AM to 5Pm</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  // backgroundColor: '#254',
                  width: '50%',
                }}>
                {/* morning */}
                <View
                  style={{
                    // backgroundColor: '#254',
                    // height: '50%',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      // backgroundColor: '#254',
                      width: '40%',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                      padding: 5,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>Size:</Text>
                  </View>

                  <View
                    style={{
                      // backgroundColor: '#123',
                      width: '60%',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-start',
                      padding: 5,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>(12*16)</Text>
                  </View>
                </View>

                {/* evening */}
                <View
                  style={{
                    // backgroundColor: '#254',
                    // height: '50%',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      // backgroundColor: '#254',
                      width: '40%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-end',
                      padding: 5,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>Water:</Text>
                  </View>

                  <View
                    style={{
                      // backgroundColor: '#123',
                      width: '60%',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      padding: 5,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>Chlorine</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* button */}
            <View
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  padding: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setShow(!show)}>
                <Text
                  style={{
                    marginRight: 10,
                  }}>
                  Price Details
                </Text>
                <ICON
                  name="ios-arrow-down"
                  size={20}
                  color="#000"
                  onPress={() => props.navigation.goBack()}
                />
              </TouchableOpacity>
            </View>

            {/* =====================>>>>>>>> hidden view  <<<<<<<<<<<<==============================*/}
            {show === true ? (
              <View>
                {/* ======>>>>>>>>>>>  weekday container <<<<<<<============*/}
                <View
                  style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}>
                  {/* weekday text */}
                  <View
                    style={{
                      borderBottomColor: 'rgba(0,0,0,0.3)',
                      borderBottomWidth: 0.5,
                      padding: 10,
                      paddingTop: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>Weekday</Text>
                  </View>
                  <View
                    style={{
                      // backgroundColor: '#faf',
                      flexDirection: 'row',
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}>
                    <View
                      style={{
                        // backgroundColor: '#254',
                        width: '50%',
                        borderRightColor: 'rgba(0,0,0,0.3)',
                        borderRightWidth: 1,
                      }}>
                      {/* morning */}
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: '20%',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            padding: 5,
                          }}>
                          <ICON name="ios-sunny" size={20} color="orange" />
                        </View>

                        <View
                          style={{
                            width: '80%',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start',
                            padding: 5,
                          }}>
                          <Text style={{fontSize: 12}}>
                            Price: 40{'   '}BHD
                          </Text>
                        </View>
                      </View>

                      {/* evening */}
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            // backgroundColor: '#254',
                            width: '20%',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-end',
                            padding: 5,
                          }}>
                          <ICON name="ios-moon" size={20} color="#000" />
                        </View>

                        <View
                          style={{
                            // backgroundColor: '#123',
                            width: '80%',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            padding: 5,
                          }}>
                          <Text style={{fontSize: 12}}>
                            Price: 35{'   '}BHD
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        width: '50%',
                      }}>
                      {/* morning */}
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: '65%',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            padding: 5,
                          }}>
                          <Text style={{fontSize: 12}}>Down Payment:</Text>
                        </View>

                        <View
                          style={{
                            width: '35%',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start',
                            padding: 5,
                          }}>
                          <Text style={{fontSize: 12}}>20 BHD</Text>
                        </View>
                      </View>

                      {/* evening */}
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: '65%',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            padding: 5,
                          }}>
                          <Text style={{fontSize: 12}}>Down Payment:</Text>
                        </View>

                        <View
                          style={{
                            width: '35%',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start',
                            padding: 5,
                          }}>
                          <Text style={{fontSize: 12}}>20 BHD</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                {/* ======>>>>>>>>>>>  weekend container <<<<<<<============*/}
                <View
                  style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}>
                  {/* weekend text */}
                  <View
                    style={{
                      borderBottomColor: 'rgba(0,0,0,0.3)',
                      borderBottomWidth: 0.5,
                      padding: 10,
                      paddingTop: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>Weekend</Text>
                  </View>
                  <View
                    style={{
                      // backgroundColor: '#faf',
                      flexDirection: 'row',
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}>
                    <View
                      style={{
                        // backgroundColor: '#254',
                        width: '50%',
                        borderRightColor: 'rgba(0,0,0,0.3)',
                        borderRightWidth: 1,
                      }}>
                      {/* morning */}
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: '20%',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            padding: 5,
                          }}>
                          <ICON name="ios-sunny" size={20} color="orange" />
                        </View>

                        <View
                          style={{
                            width: '80%',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start',
                            padding: 5,
                          }}>
                          <Text style={{fontSize: 12}}>
                            Price: 40{'   '}BHD
                          </Text>
                        </View>
                      </View>

                      {/* evening */}
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            // backgroundColor: '#254',
                            width: '20%',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-end',
                            padding: 5,
                          }}>
                          <ICON name="ios-moon" size={20} color="#000" />
                        </View>

                        <View
                          style={{
                            // backgroundColor: '#123',
                            width: '80%',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            padding: 5,
                          }}>
                          <Text style={{fontSize: 12}}>
                            Price: 40{'   '}BHD
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        width: '50%',
                      }}>
                      {/* morning */}
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: '65%',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            padding: 5,
                          }}>
                          <Text style={{fontSize: 12}}>Down Payment:</Text>
                        </View>

                        <View
                          style={{
                            width: '35%',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start',
                            padding: 5,
                          }}>
                          <Text style={{fontSize: 12}}>20 BHD</Text>
                        </View>
                      </View>

                      {/* evening */}
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: '65%',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            padding: 5,
                          }}>
                          <Text style={{fontSize: 12}}>Down Payment:</Text>
                        </View>

                        <View
                          style={{
                            width: '35%',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start',
                            padding: 5,
                          }}>
                          <Text style={{fontSize: 12}}>20 BHD</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                <View>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 12,
                      textAlign: 'center',
                    }}>
                    *Prices and offers change according to the selected date
                  </Text>
                </View>
              </View>
            ) : (
              <View />
            )}
          </View>

          <View
            style={{
              height: 20,
            }}
          />

          <TouchableOpacity
            style={{
              padding: 25,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: 'rgba(0,0,0,0.05)',
              borderBottomWidth: 3,
              borderWidth: 2,
            }}>
            <Text
              style={{
                marginRight: 10,
              }}>
              Select Date & Period
            </Text>
          </TouchableOpacity>

          <View
            style={{
              height: 20,
            }}
          />

          <TouchableOpacity
            style={{
              padding: 15,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: 'rgba(0,0,0,0.05)',
              borderBottomWidth: 3,
              borderWidth: 2,
              backgroundColor: 'rgba(62, 89, 150, 0.4)',
            }}>
            <Text
              style={{
                marginRight: 10,
                color: '#fff',
              }}>
              Select Date & Period
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, {})(Details);
