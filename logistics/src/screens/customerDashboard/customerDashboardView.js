/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {CustomButton, ProfileButton} from '../../components';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import {styles} from './customerDashboard.style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/action';
import { NAVIGATION } from '../../constants';
import { BookingItems } from './components';

const bookingData = [{
    id: 1,
    bookingNo: 'BK20006',
    date: '18-12-2022',
    status: 'No Truck Available',
},
{
    id: 2,
    bookingNo: 'BK20007',
    date: '20-12-2022',
    status: 'No Truck Available',
},
{
    id: 3,
    bookingNo: 'BK20008',
    date: '22-12-2022',
    status: 'No Truck Available',
},
{
    id: 4,
    bookingNo: 'BK20001',
    date: '22-12-2022',
    status: 'No Truck Available',
},
{
    id: 5,
    bookingNo: 'BK20002',
    date: '22-12-2022',
    status: 'No Truck Available',
},
{
    id: 6,
    bookingNo: 'BK20009',
    date: '22-12-2022',
    status: 'No Truck Available',
},
];

function CustomerDashboardView(props) {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerBackVisible: false,
      headerRight: () => (
        <ProfileButton onPress={() => props.navigation.navigate(NAVIGATION.myprofile)} />
      ),
    });
  });

  const handleViewBooking = () => {
    props.navigation.navigate(NAVIGATION.bookingDetail);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.dashboardContainer}>
        <View style={styles.createBtn}>
        <CustomButton
          buttonStyle={styles.btnDark}
          titleStyle={styles.titleLight}
          title="Create New Booking"
        />
        </View>
        <KeyboardAwareFlatList
        data={bookingData}
        renderItem={({ item }) => (
          <BookingItems
            item={item}
            onPress={() => handleViewBooking()}
          />
        )}
        keyExtractor={item => item?.id}
        ListHeaderComponent={() => <Text style={styles.dashboardTitle}>Active Bookings</Text>}
      />
      </View>
    </SafeAreaView>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(CustomerDashboardView);
