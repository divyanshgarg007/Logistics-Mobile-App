/* eslint-disable prettier/prettier */
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import profile from '../assets/images/profile.png';

const BackButton = props => {
  const onClick = () => {
    props.onPress();
  };
  return (
    <Image
      source={profile}
      style={styles.profileIcon}
      onPress={() => onClick()}
    />
  );
};

export default BackButton;

export const styles = StyleSheet.create({
  profileIcon: {
    width: Platform.OS === 'ios' ? 40 : 35,
    height: Platform.OS === 'ios' ? 40 : 35,
    marginRight: 0,
  },
});
