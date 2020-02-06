import React from 'react';
import {View, Text} from 'native-base';
import RippleView from 'react-native-material-ripple';
import styles from './style';

interface Props {
  title?: string;
  currency?: string;
  totalPurchaseInAllBusiness?: string;
  style?: Object<any | Array>;
}
export default ({
  title,
  currency,
  totalPurchaseInAllBusiness,
  style,
}: Props) => {
  return (
    <RippleView
      rippleDuration={1000}
      rippleOpacity={0.05}
      style={[styles.businessPurchaseContainer, style]}>
      <View style={{flex: 0.7, justifyContent: 'space-evenly'}}>
        <Text style={styles.businessPurchaseContainerTitle}>{title}</Text>
        <Text style={styles.businessPurchaseContainerAmount}>
          {currency || 'N'}
          {totalPurchaseInAllBusiness || '200,000,000,000.00'}
        </Text>
      </View>
    </RippleView>
  );
};
