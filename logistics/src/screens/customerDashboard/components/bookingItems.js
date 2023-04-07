/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { CustomButton } from '../../../components';
import GlobalStyle from '../../../style/globalstyle';

export default function BookingItems(props) {

  return (
    <View style={styles.bookingContainer}>
      <View style={styles.bookingBox}>
        <Text style={styles.bookingTitle}>
          Booking No: {props.item.bookingNo}
        </Text>
        <Text style={styles.bookingTitle}>
         Date Created: {props.item.date}
        </Text>
        <Text style={styles.bookingTitle}>
          Status: {props.item.status}
        </Text>
        <TouchableOpacity style={styles.notification}>
        <Icon
          name="bells"
          type="antdesign"
          size={24}
          color="#fff"
          onPress={props.toggleOverlay}
        />
        </TouchableOpacity>
        <CustomButton
          title="View Booking"
          buttonStyle={styles.btnDark}
          titleStyle={styles.titleLight}
          onPress={props.onPress}
        />
      </View>
    </View>
  );
}
export const styles = StyleSheet.create({
    bookingContainer: {
        paddingHorizontal: (20),
        flex: 1,
        position: 'relative',
    },
    bookingBox: {
        borderColor: '#1B2C50',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    bookingTitle: {
        fontFamily: GlobalStyle.fontSet.Poppins500,
        color: '#000',
        fontSize: 16,
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
        marginTop: 10,
      },
      titleLight: {
        fontFamily: GlobalStyle.fontSet.Poppins500,
        fontSize: (15),
        color: '#FFFFFF',
      },
      notification: {
        position:'absolute',
        backgroundColor: '#1B2C50',
        paddingVertical: 7,
        paddingHorizontal: 10,
        right: 0,
        top: 0,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
      },
  });
