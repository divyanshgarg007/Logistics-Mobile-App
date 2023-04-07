/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {styles} from './bookingDetails.style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/action';
import { BookingInformation, CargoDetails, DropLocation, PickupLocation } from './components';

const bookingData = [{
  id: 1,
  bookingNo: 'BK20006',
  date: '18-12-2022',
  time: 'Noida',
  deliverydate: '30-12-2022',
  distance: '271.71 Km',
},
];
const pickupLocation = [{
  id: 1,
  address: '926b, sector 2',
  city: 'Noida',
  state: 'Uttar Pradesh',
  pincode: '201301',
},
];
const dropLocation = [{
  id: 1,
  address: '926b, govindpuri',
  city: 'New Delhi',
  state: 'New Delhi',
  pincode: '110020',
},
];

function BookingDetails(props) {

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.dashboardContainer}>
        <BookingInformation bookingData={bookingData} />
        <PickupLocation pickupLocation={pickupLocation} />
        <DropLocation dropLocation={dropLocation} />
        <CargoDetails />
      </ScrollView>
    </SafeAreaView>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(BookingDetails);
