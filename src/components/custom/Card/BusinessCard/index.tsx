import React from 'react';
import {View, Text} from 'native-base';
import {Image, Dimensions, TouchableHighlight} from 'react-native';
import Button from 'components/custom/Button';
// import StarRating from '@lib/react-native-star-rating';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {app} from '@src/helpers/constants';
import style from './style';
interface Props {
  id: number;
  image: string;
  name: string;
  location: string;
  rating: string;
}
export default (props: Props) => {
  const gotToProfile = () => {
    props.navigation.navigate('Profile', {
      id: props.id,
      image: props.image,
      name: props.name,
      location: props.location,
      rating: props.rating,
    });
  };
  return (
    <TouchableHighlight>
      <View style={style.container}>
        {/* remember make source dynamic  */}
        <View style={style.imageContainer}>
          <Image
            source={props.image}
            style={{
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              width: (Dimensions.get('screen').width / 2) * 0.5,
              flex: 1,
              resizeMode: 'cover',
            }}
          />
        </View>
        <View style={style.cardInfoContainer}>
          <View>
            <Text
              style={{
                width: 150,
                fontSize: 20,
                fontFamily: app.primaryFontBold,
                color: '#4E4D50',
              }}>
              {props.name}
            </Text>
            <Text
              style={{
                marginTop: 1,
                fontFamily: app.primaryFontMedium,
                color: '#55D2C4',
              }}>
              {props.location}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
            }}>
            <View
              style={{
                alignSelf: 'flex-start',
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <Icon
                name="location-on"
                size={15}
                color="#55D2C4"
                style={{
                  marginLeft: -4,
                }}
              />
              <Text
                style={{
                  fontFamily: app.primaryFontLight,
                  color: '#55D2C4',
                  fontSize: 14,
                  alignItems: 'flex-end',
                  alignSelf: 'flex-end',
                }}>
                1 km away
              </Text>
            </View>
          </View>
        </View>
        <View style={style.cardBookContainer}>
          <Button
            buttonStyle={style.cardBook}
            textStyle={{fontSize: 18}}
            text="Book"
            onPress={gotToProfile}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};
