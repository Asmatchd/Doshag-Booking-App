import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../scenes/Home';
import drawerContentComponents from './drawerContent';

const DrawerNavigator = createDrawerNavigator(
  {
    Home,
  },
  {
    contentComponent: drawerContentComponents,
  },
);
// const DrawerNavigatorConfig = {
//   intialRouteName: 'Home',
//   navigationOptions: {
//     headerStyle: {
//       backgroundColor: '#f4511e',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       color: 'white',
//     },
//   },
//   contentOptions: {
//     // add your styling here
//     activeTintColor: '#e91e63',
//     itemsContainerStyle: {
//       marginVertical: 0,
//     },
//     iconContainerStyle: {
//       opacity: 1,
//     },
//   },
//   drawerBackgroundColor: 'pink', // sets background color of drawer
//   drawerWidth: '100%',
// };

const drawerNav = createAppContainer(DrawerNavigator);
// const drawerNav = createAppContainer(DrawerNavigator, DrawerNavigatorConfig);
export default drawerNav;
