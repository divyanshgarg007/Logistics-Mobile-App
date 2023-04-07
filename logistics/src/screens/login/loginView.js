/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Keyboard} from 'react-native';
import {CustomButton, CustomTextInput, Toasts} from '../../components';
import {styles} from './login.style';
import {connect, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/action';
import { NAVIGATION } from '../../constants';

function LoginView(props) {
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState(null);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState('');

  const authState = useSelector((state) => state.rootReducers?.authState);

  useEffect(() => {
    if (authState.signIn?.data?.meta?.status === 'success') {
      props.navigation.navigate('AppNavigator');
    } else if (authState?.signIn?.error) {
      setAlert(true);
      setMessage(authState?.signIn?.error?.message);
      setType('error');
    }
}, [authState.signIn]);

useEffect(() => {
  return () => {
    props.actions.loginErrorAction();
    setAlert(false);
    setMessage('');
    setType(null);
  };
}, []);

const login = () => {
  Keyboard.dismiss();
  let data = {
    username: value,
    password: password,
  };
  props.actions.loginAction(data);
};

console.log(authState.signIn?.data, 'sk');

  const handleSignUp = () => {
    props.navigation.navigate(NAVIGATION.signup);
  };

  const handleForget = () => {
    props.navigation.navigate(NAVIGATION.forgetPassword);
  };

  const handleHide = () => {
    setAlert(false);
    setMessage('');
    setType(null);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Toasts message={message} type={type} show={alert} handleHide={handleHide} />
      <View style={styles.loginContainer}>
        <Text style={styles.loginBox}>Login</Text>
        <View style={styles.loginInputBox}>
          <CustomTextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={setValue}
            placeholder="Email/Username"
            value={value}
            placeholderTextColor="#222222"
          />
        </View>
        <View style={styles.loginInputBox}>
          <CustomTextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={setPassword}
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            placeholderTextColor="#222222"
          />
        </View>
        <TouchableOpacity onPress={() => handleForget()} style={styles.forgetPassword}>
            <Text style={styles.forgetLink}>Forget Password</Text>
          </TouchableOpacity>
        <CustomButton
          buttonStyle={styles.btnDark}
          titleStyle={styles.titleLight}
          title="Login"
          onPress={() => login()}
        />
        <View style={styles.signUp}>
          <Text style={styles.signUpText}>Need an Account?</Text>
          <TouchableOpacity onPress={() => handleSignUp()}>
            <Text style={styles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(LoginView);
