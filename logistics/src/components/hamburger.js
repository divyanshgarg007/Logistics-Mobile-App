/* eslint-disable prettier/prettier */
import React from 'react';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';

import {Image} from 'react-native-elements';
import hamburgerIcon from '../assets/images/hamburger.png';

const Hamburger = props => {
  return (
    <TouchableOpacity onPress={() => props.onClick()}>
      <Image source={hamburgerIcon} style={styles.iconSize} />
    </TouchableOpacity>
  );
};

export default Hamburger;

export const styles = StyleSheet.create({
  iconSize: {
  width: Platform.OS === 'ios' ? (40) : (35),
  height: Platform.OS === 'ios' ? (40) : (35),
  marginLeft: 0,
  resizeMode: 'contain',
},
});

