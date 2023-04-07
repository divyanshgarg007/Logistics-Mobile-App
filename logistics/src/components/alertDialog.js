/* eslint-disable prettier/prettier */
import React from 'react';
import { Overlay, Icon } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import GlobalStyle from '../style/globalstyle';
import CustomButton from './customButton';

export default function AlertDialog(props) {
  return (
    <Overlay
      isVisible={props.visible}
      onBackdropPress={props.toggleOverlay}
      backdropStyle={styles.backdropContainer}
      overlayStyle={styles.innerOverlay}>
      <View style={styles.closeToggle}>
        <Icon
          name="close"
          type="antdesign"
          size={24}
          color="#222222"
          onPress={props.toggleOverlay}
        />
      </View>
      <Text style={styles.alertMessage}>{props.title}</Text>
      <View style={styles.alertActions}>
        <View style={styles.btnLeft}>
          <CustomButton
            title="No"
            buttonStyle={styles.btnLight}
            titleStyle={styles.titleDark}
            onPress={props.toggleOverlay}
          />
        </View>
        <View style={styles.btnRight}>
          <CustomButton
            title="Yes"
            buttonStyle={styles.btnDark}
          titleStyle={styles.titleLight}
          />
        </View>
      </View>
    </Overlay>
  );
}

export const styles = StyleSheet.create({
  innerOverlay: {
    backgroundColor: '#fff',
    width: '95%',
    paddingVertical: (20),
    paddingHorizontal: (25),
  },
  closeToggle: {
    position: 'absolute',
    right: (6),
    zIndex: 111,
    top: (6),
  },
  alertMessage: {
    fontSize: (16),
    color: '#222222',
    fontFamily: GlobalStyle.fontSet.Poppins500,
  },
  alertActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: (15),
    paddingBottom: (5),
    alignItems: 'center',
    width: '100%',
  },
  btnLeft: {
    flex: 0,
    flexBasis: '30%',
    marginRight: (20),
  },
  btnRight: {
    flex: 0,
    flexBasis: '30%',
  },
  btnDark: {
    backgroundColor: '#1B2C50',
    width: '100%',
    height: (42),
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1B2C50',
  },
  titleLight: {
    fontFamily: GlobalStyle.fontSet.Poppins500,
    fontSize: (15),
    color: '#FFFFFF',
  },
  btnLight: {
    backgroundColor: 'transparent',
    width: '100%',
    height: (42),
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1B2C50',
  },
  titleDark: {
    color: '#1B2C50',
    fontFamily: GlobalStyle.fontSet.Poppins400,
    fontSize: (15),
  },
});