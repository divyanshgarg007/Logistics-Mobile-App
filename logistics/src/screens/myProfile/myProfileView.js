/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {CustomButton, CustomTextInput} from '../../components';
import {styles} from './myProfile.style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/action';
import { NAVIGATION } from '../../constants';

function MyProfile(props) {
  const [inputValue, setInputValue] = useState('');

  const login = () => {
    props.navigation.navigate('AppNavigator');
  };

  const handleChangePassword = () => {
    props.navigation.navigate(NAVIGATION.changePassword);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.loginContainer}>
        <View style={styles.loginInputBox}>
          <CustomTextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={value => setInputValue({...inputValue, username: value})}
            placeholder="Username"
            value={inputValue}
            placeholderTextColor="#222222"
          />
        </View>
        <View style={styles.loginInputBox}>
          <CustomTextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={value => setInputValue({...inputValue, name: value})}
            placeholder="Name"
            value={inputValue}
            placeholderTextColor="#222222"
          />
        </View>
        <View style={styles.loginInputBox}>
          <CustomTextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={value => setInputValue({...inputValue, email: value})}
            placeholder="Email"
            value={inputValue}
            placeholderTextColor="#222222"
          />
        </View>
        <View style={[styles.loginInputBox, styles.fieldSpace]}>
          <CustomTextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={value => setInputValue({...inputValue, phone: value})}
            placeholder="Phone"
            value={inputValue}
            placeholderTextColor="#222222"
          />
        </View>
        <CustomButton
          buttonStyle={styles.btnDark}
          titleStyle={styles.titleLight}
          title="Update"
          onPress={() => login()}
        />
        <View style={styles.signUp}>
          <Text style={styles.signUpText}>Do You Want To?</Text>
          <TouchableOpacity onPress={() => handleChangePassword()}>
            <Text style={styles.signUpLink}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(MyProfile);
