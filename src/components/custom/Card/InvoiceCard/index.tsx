import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'native-base';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {app} from '@src/helpers/constants';
import style from './style';
import ListCard from '../ListCard';
import {Animated} from 'react-native';

interface Props {
  id: string;
  client: string;
  currency: string;
  amountPaid: string;
  invoiceStatus: string;
}

// TODO add swipe to delete or edit
export default React.memo(({item, ...props}: Props) => {
  const {currency} = props.screenProps.appstate.state.selectedOrganisation;
  const renderEdit = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <View style={style.editContainer}>
        <Animated.Text style={[style.editText, {transform: [{scale}]}]}>
          Edit
        </Animated.Text>
      </View>
    );
  };
  return (
    <Swipeable
      renderLeftActions={renderEdit}
      // onSwipeableLeftOpen={() => props.navigation.navigate('CreateInvoice')}
    >
      <ListCard
        style={style.cardContainer}
        onPress={() =>
          props.navigation.navigate(app.ROUTES.VIEW_INVOICE, {
            invoice: {
              ...item,
              ...props.screenProps.appstate.state.selectedOrganisation,
            },
          })
        }>
        <View style={style.cardLeftInfo}>
          <View>
            <Text
              style={{
                fontFamily: app.primaryFontBold,
              }}>
              {item.client}
            </Text>
          </View>
          <View>
            <View>
              <Text style={style.subTitle}>Amount Paid</Text>
            </View>
            <Text style={{...style.subTitleText, textTransform: 'uppercase'}}>
              {item.currency || currency} {item.amountPaid}
            </Text>
          </View>
        </View>
        <View style={style.cardRightInfo}>
          <View>
            <Text style={style.subTitle}>Status</Text>
          </View>
          <Text style={style.subTitleText}>{item.invoiceStatus}</Text>
        </View>
      </ListCard>
    </Swipeable>
  );
});
