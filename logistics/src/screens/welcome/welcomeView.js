/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './welcome.style';
import AppLogo from '../../assets/images/logo.jpg';
import { CustomButton } from '../../components';
import { Image } from 'react-native-elements';
import { NAVIGATION } from '../../constants';

export default function WelcomeView(props) {

  function handleLogin() {
    props.navigation.navigate(NAVIGATION.login);
  }

  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeBox}>Welcome</Text>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={AppLogo} />
      <Text style={styles.welcomeBox}>Login as a</Text>
      <View style={styles.btnContainer}>
      <CustomButton
        buttonStyle={styles.btnDark}
        titleStyle={styles.titleLight}
        title="Customer"
        onPress={() => handleLogin()}
      />
       </View>
       <View style={styles.btnContainer}>
      <CustomButton
        buttonStyle={styles.btnLight}
        titleStyle={styles.titleDark}
        title="Truck Company"
        onPress={() => handleLogin()}
      />
     </View>
    </View>
  );
}
