/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GlobalStyle from '../../../style/globalstyle';

export default function BookingInformation(props) {
  return (
    <View style={styles.bookingContainer}>
        <Text style={styles.dashboardTitle}>Booking Information</Text>
        {props?.bookingData?.map((item, index) => {
         return (
         <View style={styles.bookingBox} key={index}>
        <Text style={styles.bookingTitle}>
          Booking Id: {item.bookingNo}
        </Text>
        <Text style={styles.bookingTitle}>
          Service Date: {item.date}
        </Text>
        <Text style={styles.bookingTitle}>
          Expected Delivery: {item.time}
        </Text>
        <Text style={styles.bookingTitle}>
          Expected Delivery: {item.deliverydate}
        </Text>
        <Text style={styles.bookingTitle}>
          Distance: {item.distance}
        </Text>
         </View>
         );
        })}
    </View>
  );
}

export const styles = StyleSheet.create({
    bookingContainer: {
        paddingHorizontal: (20),
    },
    dashboardTitle: {
        marginTop: (20),
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        fontFamily: GlobalStyle.fontSet.Poppins600,
        color: '#000',
        fontSize: (18),
        textAlign: 'center',
      },
    bookingBox: {
        borderColor: '#1B2C50',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    bookingTitle: {
        fontFamily: GlobalStyle.fontSet.Poppins500,
        color: '#000',
        fontSize: 16,
    },
  });

