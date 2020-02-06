/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import Route from './routes/App.routes';
import subscribe from './subscriber';
interface Props {
  user?: string;
}
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const App = React.memo((props: Props) => {
  const {state} = props.appstate;
  // const userService = new UserService();

  // const setUserSession = async () => {
  //   userService.getCurrentUserDetails().then((res: any) => {
  //     const userDetails = JSON.parse(res);
  //     props.appstate.setCurrentUser(userDetails);
  //   });
  //   await props.authstate.checkSession();
  // };

  // React.useEffect(() => {
  //   setUserSession();
  // }, []);

  return (
    <Fragment>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <Spinner
        visible={state.isLoading}
        textContent={state.loadingMessage}
        textStyle={{color: '#fff'}}
      />
      <Route
        screenProps={{
          ...props,
        }}
      />
    </Fragment>
  );
});

export default subscribe(App);
