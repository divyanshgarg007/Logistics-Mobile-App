/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../constants';
import { Platform } from 'react-native';
import { HeaderLogo, BackButton } from '../components';
import { ForgetPasswordView, LoginView, SignUpView, WelcomeView } from '../screens';
import { styles } from './navigator.style';
import AppNavigator from './AppNavigator';

const Stack = createNativeStackNavigator();
export function AuthNavigator(props) {

  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTransparent: Platform.OS === 'ios' ? true : false,
        headerTitleAlign: 'center',
        headerBackVisible: false,
        headerShadowVisible: true,
      })}>
      <Stack.Screen
        name={NAVIGATION.welcome}
        component={WelcomeView}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={NAVIGATION.login}
        component={LoginView}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: props => {
            return (
              <BackButton onClick={() => navigation.goBack()} />
            );
          },
          headerTitle: props => <HeaderLogo {...props} />,
        })}
      />
      <Stack.Screen
        name={NAVIGATION.signup}
        component={SignUpView}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: props => {
            return (
              <BackButton onClick={() => navigation.goBack()} />
            );
          },
          headerTitle: props => <HeaderLogo {...props} />,
        })}
      />
      <Stack.Screen
        name={NAVIGATION.forgetPassword}
        component={ForgetPasswordView}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: props => {
            return (
              <BackButton onClick={() => navigation.goBack()} />
            );
          },
          headerTitle: props => <HeaderLogo {...props} />,
        })}
      />
      <Stack.Screen
        name="AppNavigator"
        component={AppNavigator}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
