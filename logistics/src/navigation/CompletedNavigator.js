/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../constants';
import { Platform, Text } from 'react-native';
import { HeaderLogo, Hamburger, BackButton } from '../components';
import { ChangePasswordView, CompletedOrdersView, MyProfileView } from '../screens';
import { styles } from './navigator.style';

const Stack = createNativeStackNavigator();

export function CompletedNavigator(props) {

  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTransparent: Platform.OS === 'ios' ? true : false,
        headerTitleAlign: 'center',
        headerBackVisible: false,
        headerShadowVisible: true,
      })}>
      <Stack.Screen
        name={NAVIGATION.completedOrders}
        component={CompletedOrdersView}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: props => {
            return <Hamburger onClick={() => navigation.openDrawer()} />;
          },
          headerTitle: props => <HeaderLogo {...props} />,
        })}
      />
      <Stack.Screen
        name={NAVIGATION.myprofile}
        component={MyProfileView}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: props => {
            return <BackButton onClick={() => navigation.goBack()} />;
          },
          headerTitle: () => {
            return (
              <Text style={styles.navigatorText}>My Profile</Text>
            );
          },
        })}
      />
      <Stack.Screen
        name={NAVIGATION.changePassword}
        component={ChangePasswordView}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: props => {
            return <BackButton onClick={() => navigation.goBack()} />;
          },
          headerTitle: () => {
            return (
              <Text style={styles.navigatorText}>Change Password</Text>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
}
