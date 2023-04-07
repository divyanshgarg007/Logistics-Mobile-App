/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {CustomButton, CustomTextInput} from '../../components';
import {styles} from './signUp.style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/action';
import { NAVIGATION } from '../../constants';

function SignUpView(props) {
  const [inputValue, setInputValue] = useState({});

  const signUp = () => {
    props.actions.signupAction({...inputValue});
    props.navigation.navigate(NAVIGATION.login);
  };

  const handleSignIn = () => {
    props.navigation.navigate(NAVIGATION.login);
  };

  console.log(inputValue, 'setInputValue');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginBox}>Register</Text>
        <View style={styles.loginInputBox}>
          <CustomTextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={value => setInputValue({...inputValue, username: value})}
            placeholder="Username"
            value={inputValue?.username}
            placeholderTextColor="#222222"
          />
        </View>
        <View style={styles.loginInputBox}>
          <CustomTextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={value => setInputValue({...inputValue, name: value})}
            placeholder="Name"
            value={inputValue?.name}
            placeholderTextColor="#222222"
          />
        </View>
        <View style={styles.loginInputBox}>
          <CustomTextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={value => setInputValue({...inputValue, email: value})}
            placeholder="Email"
            value={inputValue?.email}
            placeholderTextColor="#222222"
          />
        </View>
        <View style={styles.loginInputBox}>
          <CustomTextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={value => setInputValue({...inputValue, password: value})}
            // onChangeText={setPassword}
            placeholder="Password"
            value={inputValue?.password}
            secureTextEntry={true}
            placeholderTextColor="#222222"
          />
        </View>
        <View style={[styles.loginInputBox, styles.fieldSpace]}>
          <CustomTextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={value => setInputValue({...inputValue, confirmpassword: value})}
            placeholder="Confirm Password"
            value={inputValue?.confirmpassword}
            secureTextEntry={true}
            placeholderTextColor="#222222"
          />
        </View>
        <CustomButton
          buttonStyle={styles.btnDark}
          titleStyle={styles.titleLight}
          title="Sign Up"
          onPress={() => signUp()}
        />
        <View style={styles.signUp}>
          <Text style={styles.signUpText}>Already Have An Account?</Text>
          <TouchableOpacity onPress={() => handleSignIn()}>
            <Text style={styles.signUpLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(SignUpView);
