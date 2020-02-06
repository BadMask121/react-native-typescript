import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AppNavigation from './App';

const Navigation = createSwitchNavigator(
  {
    AppNavigation,
  },
  {
    initialRouteName: 'AppNavigation',
  },
);

export default createAppContainer(Navigation);
