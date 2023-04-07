/* eslint-disable prettier/prettier */
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import closeIcon from '../assets/images/back.png';

const BackButton = props => {
  const onClick = () => {
    props.onClick();
  };
  return (
    <Image
      source={closeIcon}
      style={styles.backIcon}
      onPress={() => onClick()}
    />
  );
};

export default BackButton;

export const styles = StyleSheet.create({
  backIcon: {
    width: Platform.OS === 'ios' ? 40 : 35,
    height: Platform.OS === 'ios' ? 40 : 35,
    marginLeft: 0,
  },
});
