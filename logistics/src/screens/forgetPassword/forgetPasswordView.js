/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {CustomButton, CustomTextInput} from '../../components';
import {styles} from './forgetPassword.style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/action';
import { NAVIGATION } from '../../constants';

function ForgetPasswordView(props) {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginBox}>Reset Password</Text>
        <View style={styles.loginInputBox}>
          <CustomTextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={setEmail}
            placeholder="Email/Username"
            value={email}
            placeholderTextColor="#222222"
          />
        </View>
        <View style={styles.resetBtn}>
        <CustomButton
          buttonStyle={styles.btnDark}
          titleStyle={styles.titleLight}
          title="Reset Password"
          // onPress={() => login()}
        />
        </View>
      </View>
    </SafeAreaView>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(ForgetPasswordView);
