import React from 'react';
import {View, Container, Content, Text} from 'native-base';
import {SafeAreaView} from 'react-native';

export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <View
          style={{
            flex: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'orange',
          }}>
          <Text style={{fontSize: 30}}>Welcome To Boilerplate</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
