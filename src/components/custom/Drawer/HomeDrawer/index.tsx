import React from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import {View, Text} from 'react-native-animatable';
import {Container, ListItem} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {app} from 'helpers/constants';
import subscriber from 'subscriber';
import {StackActions, NavigationActions} from 'react-navigation';

const Index = props => {
  const Logout = () => {
    props.authstate.logout().then(res => {
      props.authstate.setLoggedIn(false);
      props.appstate.resetState();
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <Container style={styles.container}>
          <TouchableOpacity>
            <ListItem style={styles.itemContainer} onPressIn={Logout}>
              <Icon
                name="sign-out-alt"
                size={15}
                color={app.primaryColorDarker}
                style={{
                  padding: 15,
                }}
              />
              <Text style={styles.logoutContainerText}>Logout </Text>
            </ListItem>
          </TouchableOpacity>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default subscriber(Index);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    // backgroundColor: app.primaryColorLight,
  },
  itemContainer: {
    flexDirection: 'row',
    // backgroundColor: '#3C50B8',
  },
  logoutContainerText: {
    color: '#000',
  },
});
