import React, {lazy, Suspense, useState, useRef, useEffect} from 'react';
import {View, Text} from 'native-base';
import {
  Image,
  Dimensions,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
  TouchableOpacity,
  Animated,
  SectionList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RippleView from 'react-native-material-ripple';
import * as short from 'shortid';

import {app} from '@src/helpers/constants';
import style from './style';
const ListCard = lazy(() => import('@custom/Card/ListCard'));

interface Props {
  loading?: boolean;
  handlePageScroll?: Function;
  data: Array;
  props?: any;
  flexStart?: number;
  flexEnd?: number;
}

const DashbordContent = React.memo(
  ({loading, handlePageScroll, data, flexEnd, flexStart, props}: Props) => {
    const [state, setstate] = useState({
      scrollY: new Animated.Value(0),
    });
    const {ROUTES} = app;

    const labelSize = state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [40, 30],
      extrapolate: 'clamp',
    });
    const flex = state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [flexStart, flexEnd],
      extrapolate: 'clamp',
    });

    useEffect(() => {
      handlePageScroll(flex, labelSize);
    }, []);

    const onScroll = Animated.event([
      {nativeEvent: {contentOffset: {y: state.scrollY}}},
    ]);

    //render header and footer functions
    const renderSectionHeader = (title: string) => (
      <View style={style.sectionHeader}>
        <Text style={style.sectionTitle}>{title}</Text>
        <RippleView
          style={{
            backgroundColor: 'rgba(32,57,184,0.1)',
            zIndex: -1,
            width: 30,
            height: 30,
            borderRadius: 50,
            marginRight: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          key={short.generate()}
          onPress={() => {
            let Route = '';
            switch (title) {
              case 'Businesses':
                Route = ROUTES.CREATE_BUSINESS;
                break;
              case 'Invoices':
                Route = ROUTES.CREATE_INVOICE;
                break;
              case 'Offers':
                Route = '';
                break;
              case 'Purchases':
                Route = '';
                break;

              default:
                break;
            }
            return props.hasOwnProperty('props')
              ? props.props.navigation.navigate(Route, {from: 'main'})
              : props.navigation.navigate(Route);
          }}>
          <Icon name="plus" size={20} color={app.primaryColorLight} />
        </RippleView>
      </View>
    );

    const renderFooter = show =>
      show ? (
        <View>
          <ActivityIndicator
            animating
            size="large"
            color={app.primaryColorLight}
          />
        </View>
      ) : null;

    // arrange item lists
    const selectionList = item => [
      {
        data: item.data,
        key: short.generate(),
      },
    ];

    // render business items
    const renderBusinessCard = (item, loading) => {
      const sectionData = selectionList(item);
      return (
        <SectionList
          sections={sectionData}
          maxToRenderPerBatch={2}
          onEndReachedThreshold={0.5}
          keyExtractor={(_item, index) => short.generate()}
          renderItem={({item}) => (
            <ListCard
              {...{props}}
              onPress={() => {
                props.props.appstate
                  .setSelectedOrganisation(item)
                  .then(res =>
                    props.props.navigation.navigate(ROUTES.BUSINESS_DASHBOARD),
                  );
              }}>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: 'flex-start',
                }}>
                <Image
                  source={{
                    uri: item.avatar,
                  }}
                  style={{
                    flex: 1,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    width: (Dimensions.get('screen').width / 2) * 0.5,
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <View style={{padding: 10}}>
                <Text style={style.listText}>{item.organisationname}</Text>
                <Text style={style.listText}>{item.organisationlocation}</Text>
              </View>
            </ListCard>
          )}
          ListFooterComponent={() => {
            return renderFooter(loading);
          }}
          renderSectionHeader={({section}) => renderSectionHeader('Businesses')}
          scrollEventThrottle={1}
          {...{onScroll}}
        />
      );
    };

    // render other items
    const renderOtherCard = item => {
      const sectionData = selectionList(item);
      const Header = renderSectionHeader(item.title);
      return (
        <View>
          {Header}
          <SectionList
            contentContainerStyle={{
              display: 'flex',
              padding: 0,
              paddingLeft: 0,
            }}
            pagingEnabled
            invertStickyHeaders={true}
            sections={sectionData}
            horizontal={true}
            invertStickyHeaders={true}
            maxToRenderPerBatch={2}
            onEndReachedThreshold={0.5}
            style={{
              left: 0,
              top: -10,
              bottom: 0,
              right: 0,
              width: '100%',
              marginRight: 100,
            }}
            keyExtractor={(_item, index) => short.generate()}
            renderItem={({item, index, section}) => (
              <ListCard {...{props}} cardStyle={{flexDirection: 'column'}}>
                <View style={[{padding: 10}]}>
                  <Text
                    style={[style.listText, {fontFamily: app.primaryFontBold}]}>
                    {item.title}
                  </Text>
                </View>
                <View style={{padding: 10}}>
                  <Text
                    style={{
                      color: app.primaryColorLight,
                      fontSize: 10,
                      marginBottom: 2,
                    }}>
                    Amount
                  </Text>
                  <Text style={{...style.listText}}>
                    {item.currency}
                    {item.amount}
                  </Text>
                </View>
              </ListCard>
            )}
            scrollEventThrottle={1}
          />
        </View>
      );
    };

    return (
      <Suspense fallback={renderFooter(true)}>
        <View style={style.sectionContainer}>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              if (typeof item.title !== 'undefined')
                switch (item.title) {
                  case 'Businesses':
                    return renderBusinessCard(item, item.loading);
                  default:
                    return renderOtherCard(item);
                }

              return <View></View>;
            }}
            keyExtractor={(_item, index) => short.generate()}
            scrollEventThrottle={1}
            {...{onScroll}}
          />
        </View>
      </Suspense>
    );
  },
);

export default DashbordContent;
