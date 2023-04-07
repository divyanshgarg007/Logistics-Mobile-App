/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform } from 'react-native';
import TAB_HOME from '../assets/images/tabhome.png';
import TAB_LIST from '../assets/images/listTab.png';
import TAB_CART from '../assets/images/cartTab.png';
import { DashboardNavigator } from './DashboardNavigator';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/action';
import { strings } from '../localization';
import GlobalStyle from '../style/globalstyle';
import normalize from 'react-native-normalize';
import { CompletedNavigator } from './CompletedNavigator';
import { AllBookingsNavigator } from './AllBookingsNavigator';

const Tab = createBottomTabNavigator();

function AppNavigator(props) {

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarStyle: {
          backgroundColor: '#000',
          height: Platform.OS === 'ios' ? normalize(90) : normalize(60),
          paddingVertical: normalize(5),
        },
        tabBarShowLabel: true,
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          // You can return any component that you like here!
          var iconName;

          if (route.name === 'tab-home') {
            iconName = TAB_HOME;
            return (
              <Image
                style={{ width: normalize(26), height: normalize(26), tintColor: color }}
                source={iconName}
              />
            );
          } else if (route.name === 'tab-list') {
            iconName = TAB_LIST;
            return (
              <Image
                style={{ width: normalize(26), height: normalize(26), tintColor: color }}
                source={iconName}
              />
            );
          } else if (route.name === 'tab-cart') {
            iconName = TAB_CART;
            return (
              <Image
                style={{ width: normalize(26), height: normalize(26), tintColor: color }}
                source={iconName}
              />
            );
          }
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#A0A3BD',
        tabBarLabelStyle: { fontFamily: GlobalStyle.fontSet.Poppins500, fontSize: 13 },
      })}>
      <Tab.Screen
        name="tab-home"
        component={DashboardNavigator}
        options={{
          title: 'Dashboard',
          tabBarItemStyle: {
            flexDirection: 'column',
            alignItem: 'flex-start',
            justifyContent: 'space-around',
          },
        }}
      />
      <Tab.Screen
        name="tab-list"
        component={CompletedNavigator}
        options={{
          title: 'Completed Orders',
          tabBarItemStyle: {
            flexDirection: 'column',
            alignItem: 'flex-start',
            justifyContent: 'space-around',
          },
        }}
      />
      <Tab.Screen
        name="tab-cart"
        component={AllBookingsNavigator}
        options={{
          title: 'All Bookings',
          tabBarItemStyle: {
            flexDirection: 'column',
            alignItem: 'flex-start',
            justifyContent: 'space-around',
          },
        }}
      />
    </Tab.Navigator>
  );
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(AppNavigator);
