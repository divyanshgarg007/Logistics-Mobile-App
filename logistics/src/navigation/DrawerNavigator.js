/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ContactUsView, FaqsView, MenuView } from '../screens';
import { BackButton } from '../components';
import { NAVIGATION } from '../constants';
import { Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import { styles } from './navigator.style';
import { AuthNavigator } from './AuthNavigator';

const Drawer = createDrawerNavigator();

export function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator
      initialRouteName="AuthNavigator"
      drawerContent={props => <MenuView {...props} />}
      screenOptions={({ navigation }) => ({
        headerShown: false,
        drawerPosition: 'left',
        title: '',
        drawerStyle: { width: '70%' },
        headerShadowVisible: true,
      })}>
        <Drawer.Screen name="AuthNavigator" component={AuthNavigator} />
      <Drawer.Screen name="AppNavigator" component={AppNavigator} />
      <Drawer.Screen
        name={NAVIGATION.contact}
        component={ContactUsView}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitleAlign: 'center',
          // headerBackVisible: false,
          // headerStyle: {height: Platform.OS === 'ios' ? normalize(84) : normalize(54)},
          headerLeft: props => {
            return (
              <View style={{ marginLeft: 15 }}>
                <BackButton onClick={() => navigation.goBack()} />
              </View>
            );
          },
          headerTitle: props => {
            return <Text style={styles.navigatorText}>Contact Us</Text>;
          },
        })}
      />
      <Drawer.Screen
        name={NAVIGATION.faqs}
        component={FaqsView}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitleAlign: 'center',
          // headerBackVisible: false,
          headerLeft: props => {
            return (
              <View style={{ marginLeft: 15 }}>
              <BackButton onClick={() => navigation.goBack()} />
            </View>
            );
          },
          headerTitle: props => {
            return <Text style={styles.navigatorText}>Faqs</Text>;
          },
        })}
      />
    </Drawer.Navigator>
  );
}
