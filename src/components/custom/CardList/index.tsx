import React, {lazy, Suspense, useState, useEffect} from 'react';
import {View, Text} from 'native-base';
import {
  Image,
  Dimensions,
  FlatList,
  TouchableHighlight,
  Animated,
} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {data} from '../../../helpers/dummydata';
import {app} from '@src/helpers/constants';
const BusinessCard = lazy(() => import('../Card/BusinessCard'));

export default ({loading, handlePageScroll, ...props}) => {
  const [state, setstate] = useState({
    scrollY: new Animated.Value(0),
  });

  const renderFooter = () =>
    loading ? (
      <View>
        <ActivityIndicator animating size="large" />
      </View>
    ) : null;

  const labelSize = state.scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [40, 30],
    extrapolate: 'clamp',
  });
  const flex = state.scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [0.3, 0.1],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    handlePageScroll(flex, labelSize);
  }, []);

  const onScroll = Animated.event([
    {nativeEvent: {contentOffset: {y: state.scrollY}}},
  ]);

  return (
    <Suspense fallback={renderFooter()}>
      <View style={{flex: 1, padding: 5}}>
        <Animated.FlatList
          data={data}
          renderItem={({item, index, separators}) => (
            <BusinessCard key={item.id} {...item} {...props} />
          )}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={renderFooter}
          scrollEventThrottle={1}
          {...{onScroll}}
        />
      </View>
    </Suspense>
  );
};
