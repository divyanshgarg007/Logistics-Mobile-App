/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import logo from '../assets/images/logo.jpg';

const HeaderLogo = () => {
  return (
    <>
      <Image style={
        styles.logo
        } source={logo} />
    </>
  );
};

export default HeaderLogo;

export const styles = StyleSheet.create({
  logo: {
    width: normalize(160),
    height: normalize(33),
    resizeMode: 'contain',
  },
});

