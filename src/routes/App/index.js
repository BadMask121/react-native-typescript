import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeDrawer from 'components/custom/Drawer/HomeDrawer';
import {app} from 'helpers/constants';

const index = createDrawerNavigator(
  {
    Dashboard,
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
    initialRouteName: 'Dashboard',
  },
);

export default createAppContainer(index);
