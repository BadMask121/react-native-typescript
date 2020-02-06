/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'unstated';
import AppComponent from './src/App';
import {name as appName} from './app.json';
// import whyDidYouRender from '@welldone-software/why-did-you-render';
// whyDidYouRender(React);

const App = () => {
  return (
    <Provider>
      <AppComponent />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => App);
