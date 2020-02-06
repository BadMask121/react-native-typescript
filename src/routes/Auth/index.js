import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Welcome from '../../components/screens/Welcome';
import {Login, Signup, ConfirmSignup} from '../../containers';
import AppNavigation from '../App';
import {createAppContainer} from 'react-navigation';

const index = createStackNavigator(
  {
    Welcome: {
      screen: props => <Welcome {...props} />,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
      }),
    },
    Login: {
      screen: props => <Login {...props} />,
    },
    Signup: {
      screen: props => <Signup {...props} />,
    },
    ConfirmSignup: {
      screen: props => <ConfirmSignup {...props} />,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowColor: 'transparent',
      },
      headerTintColor: 'gray',
      headerBackTitle: null,
      headerTitle: () => null,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    initialRouteName: 'Welcome',
  },
);

export default createAppContainer(index);
