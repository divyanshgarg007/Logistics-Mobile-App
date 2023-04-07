/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
         Service Date: {props.item.date}
        </Text>
        <Text style={styles.bookingTitle}>
          Pickup Location: {props.item.status}
        </Text>
        <Text style={styles.bookingTitle}>
          Drop off Location: {props.item.status}
        </Text>
        <Text style={styles.bookingTitle}>
          Delivery Date: {props.item.status}
        </Text>
        <Text style={styles.bookingTitle}>
          Truck Company: {props.item.status}
        </Text>
        <Text style={styles.bookingTitle}>
          Amount Paid: {props.item.status}
        </Text>
        <CustomButton
          title="View Booking"
          buttonStyle={styles.btnDark}
          titleStyle={styles.titleLight}
        />
      </View>
    </View>
  );
}
export const styles = StyleSheet.create({
    bookingContainer: {
        paddingHorizontal: (20),
        flex: 1,
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
  });
