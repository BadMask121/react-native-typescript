import React from 'react';
import {Container} from 'unstated';
import {APP_STATE} from '../intialState';
export default class AppState extends Container<any | Object> {
  constructor(props) {
    super(props);
  }
  state = APP_STATE;

  resetState = async () => {
    await this.setState(APP_STATE);
    return;
  };

  setLoading = (condition: Boolean) => {
    this.setState({
      ...this.state,
      isLoading: condition,
    });
  };

  setCurrentScreen = async (screen: any) => {
    await this.setState({
      ...this.state,
      currentScreen: screen,
    });
  };

  setSubmitting = async (condition: Boolean) => {
    await this.setState({
      ...this.state,
      isLoading: condition,
      submitting: condition,
    });

    return;
  };
}
