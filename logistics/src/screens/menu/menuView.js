/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { View, ScrollView } from 'react-native';
import NavigationBar from './components/navigationBar';
import { MenuItem } from './components';
import { Icon } from 'react-native-elements';
import { NAVIGATION } from '../../constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action';
import { styles } from './menu.style';

function MenuView(props) {

  const menuData = [
    {
      id: '1',
      name: 'Contact Us',
    },
    {
      id: '2',
      name: 'Faqs',
    },
  ];

  const handleMenu = (title) => {
    if (title === 'Contact Us') {
      props.navigation.navigate(NAVIGATION.contact);
    }
    else if (title === 'Faqs') {
      props.navigation.navigate(NAVIGATION.faqs);
    } else {
      props.navigation.navigate('AppNavigator');
    }
  };

  const onSignOut = () => {
    console.log('Sign Out');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.menuContainer}>
        <NavigationBar onClose={() => props.navigation.closeDrawer()} />
        <View style={styles.userInfo}>
              <Icon
                size={(25)}
                name="user"
                type="antdesign"
                iconStyle={styles.userIcon}
              />
              <Text style={styles.userName}>UserName</Text>
        </View>
        <View>
          {menuData.map((item, index) => (
            <MenuItem
              key={item.id}
              item={item}
              handleMenu={name => handleMenu(name)}
            />
          ))}
        </View>
          <TouchableOpacity onPress={() => onSignOut()}>
            <Text style={styles.signOut}>Log Out</Text>
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(MenuView);