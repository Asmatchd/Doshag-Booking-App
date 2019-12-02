import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';

import drawerNav from './DrawerNavigator';
import Splash from '../scenes/Splash';
import Options from '../scenes/Options';
import LogIn from '../scenes/LogIn';
import Register from '../scenes/Register';
import Settings from '../scenes/Settings';
import LiveChat from '../scenes/LiveChat';
import Details from '../scenes/Details';

var firstScreen;
// Platform.OS === 'android' ? (firstScreen = Splash) : (firstScreen = login);
const AppNavigator = createStackNavigator(
  {
    Splash,
    Options,
    LogIn,
    Register,
    drawerNav,
    Settings,
    LiveChat,
    Details,

    // firstScreen,
    // login,
  },

  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(AppNavigator);
