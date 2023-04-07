/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './DrawerNavigator';
import { AuthNavigator } from './AuthNavigator';

export function RootNavigator(props) {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
}
