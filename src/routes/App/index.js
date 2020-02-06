import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeDrawer from 'components/custom/Drawer/HomeDrawer';
import {app} from 'helpers/constants';
import {Home} from '../../components/screens';

const index = createDrawerNavigator(
  {
    Home,
  },
  {
    drawerPosition: 'left',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: app.primaryColorLight,
        elevation: 0,
      },
      headerTintColor: 'gray',
      headerBackTitle: null,
      headerTitle: () => null,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    screenContainerStyle: {
      borderRadius: 50,
    },
    drawerType: 'slide',
    drawerBackgroundColor: 'transparent ',
    keyboardDismissMode: 'on-drag',
    contentComponent: props => {
      return <HomeDrawer {...props} />;
    },
    initialRouteName: 'Home',
  },
);

export default createAppContainer(index);
