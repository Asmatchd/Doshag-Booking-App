import {Platform} from 'react-native';
const theme = {
  colors: {
    primary: '#004B87',
    secondary: '#009EE0',
    danger: 'pink',
  },
  Header: {
    statusBarProps: {barStyle: 'dark-content', translucent: true},
  },
  Button: {
    raised: true,
    containerStyle: {marginVertical: 10},
    loadingProps: {size: 'large', color: 'white'},
    titleStyle: {color: 'white'},
    buttonStyle: {
      borderRadius: 10,
      backgroundColor: '#004B87',
    },
  },

  Text: {
    h4Style: {fontSize: 15, fontWeight: 'normal', padding: 5, color: 'red'},
  },

  dimens: {
    itemContainerPadding: 20,
  },
  SocialIcon: {
    style: {
      borderRadius: 5,
      paddingLeft: 30,
      paddingRight: 30,
    },
  },

  Input: {
    inputContainerStyle: {
      borderColor: 'silver',
      borderWidth: 1,
      borderRadius: 8,
    },
    containerStyle: {
      marginVertical: 5,
    },
    placeholderTextColor: '#ADADAD',
    errorStyle: {textAlign: 'center', fontSize: 12},
    leftIconContainerStyle: {
      marginRight: 10,
    },
  },

  Icon: {
    size: 25,
    color: '#ADADAD',
  },
  CheckBox: {
    containerStyle: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
  },

  Picker: {
    itemStyle: {borderRadius: 1},
  },
};

export default theme;
