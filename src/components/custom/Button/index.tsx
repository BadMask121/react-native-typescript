import React from 'react';
import {Dimensions, Platform, ActivityIndicator} from 'react-native';
import {Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from './style.js';
import {app} from '@src/helpers/constants';
interface Props {
  props?: Object;
  fontWeight?: string;
  text: string;
  type?: string;
  icon?: string;
  iconColor?: string;
  iconSize?: number;
  buttonStyle?: Object;
  textStyle?: Object;
  disable?: Boolean;
  loading?: Boolean;
  loaderColor?: any;
  onPress?: Function;
}

export default (props: Props) => {
  return (
    <Button
      disabled={props.disable}
      style={{
        backgroundColor: app.primaryColorLight,
        ...style.buttonContainer,
        ...props.buttonStyle,
      }}
      type={props.type}
      onPress={props.onPress}>
      {props.icon ? (
        <Icon
          name={props.icon}
          size={props.iconSize}
          color={props.iconColor}
          light
        />
      ) : (
        <></>
      )}
      {props.loading ? (
        <ActivityIndicator color={props.loaderColor || '#fff'} size={20} />
      ) : (
        <Text
          style={{
            fontFamily: app.primaryFontBold,
            textTransform: 'capitalize',
            ...style.textStyle,
            ...props.textStyle,
            paddingTop: Platform.OS === 'ios' ? 5 : 0,
          }}>
          {props.text}
        </Text>
      )}
    </Button>
  );
};
