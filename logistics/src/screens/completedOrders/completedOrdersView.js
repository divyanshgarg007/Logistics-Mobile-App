/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {CustomButton, ProfileButton} from '../../components';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import {styles} from './completedOrders.style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/action';
import { NAVIGATION } from '../../constants';
import { CompletedItems } from './components';

const bookingData = [{
    id: 1,
    bookingNo: 'BK20006',
    date: '18-12-2022',
    status: 'Noida',
    deliverydate: '30-12-2022',
    companyName: 'Divyansh truck company',
    price: 'Rs 3000',
},
{
    id: 2,
    bookingNo: 'BK20007',
    date: '20-12-2022',
    status: 'Noida',
    deliverydate: '30-12-2022',
    companyName: 'Divyansh truck company',
    price: 'Rs 3000',
},
{
    id: 3,
    bookingNo: 'BK20008',
    date: '22-12-2022',
    status: 'Noida',
    deliverydate: '30-12-2022',
    companyName: 'Divyansh truck company',
    price: 'Rs 3000',
},
{
    id: 4,
    bookingNo: 'BK20001',
    date: '22-12-2022',
    status: 'Noida',
    deliverydate: '30-12-2022',
    companyName: 'Divyansh truck company',
    price: 'Rs 3000',
},
{
    id: 5,
    bookingNo: 'BK20002',
    date: '22-12-2022',
    status: 'Noida',
    deliverydate: '30-12-2022',
    companyName: 'Divyansh truck company',
    price: 'Rs 3000',
},
{
    id: 6,
    bookingNo: 'BK20009',
    date: '22-12-2022',
    status: 'Noida',
    deliverydate: '30-12-2022',
    companyName: 'Divyansh truck company',
    price: 'Rs 3000',
},
];

function CompletedOrdersView(props) {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerBackVisible: false,
      headerRight: () => (
        <ProfileButton onPress={() => props.navigation.navigate(NAVIGATION.myprofile)} />
      ),
    });
  });

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
          <CompletedItems
            item={item}
          />
        )}
        keyExtractor={item => item?.id}
        ListHeaderComponent={() => <Text style={styles.dashboardTitle}>Completed Orders</Text>}
      />
      </View>
    </SafeAreaView>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(CompletedOrdersView);
