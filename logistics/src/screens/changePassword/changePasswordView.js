/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {CustomButton, CustomTextInput} from '../../components';
import {styles} from './changePassword.style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/action';
import { NAVIGATION } from '../../constants';

function ChangePassword(props) {
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
            onChangeText={value => setInputValue({...inputValue, oldpassword: value})}
            // onChangeText={setPassword}
            placeholder="Old Password"
            value={inputValue}
            secureTextEntry={true}
            placeholderTextColor="#222222"
          />
        </View>
        <View style={styles.loginInputBox}>
          <CustomTextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={value => setInputValue({...inputValue, newpassword: value})}
            // onChangeText={setPassword}
            placeholder="New Password"
            value={inputValue}
            secureTextEntry={true}
            placeholderTextColor="#222222"
          />
        </View>
        <View style={[styles.loginInputBox, styles.fieldSpace]}>
          <CustomTextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={value => setInputValue({...inputValue, confirmpassword: value})}
            placeholder="Confirm New Password"
            value={inputValue}
            secureTextEntry={true}
            placeholderTextColor="#222222"
          />
        </View>
        <CustomButton
          buttonStyle={styles.btnDark}
          titleStyle={styles.titleLight}
          title="Submit"
          onPress={() => login()}
        />
      </View>
    </SafeAreaView>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(ChangePassword);
