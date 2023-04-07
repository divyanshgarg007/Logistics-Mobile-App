/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import GlobalStyle from '../../style/globalstyle';

export const styles = StyleSheet.create({
  loginContainer: {
    paddingHorizontal: (20),
    paddingTop: 20,
    backgroundColor: '#fff',
    flex: 1,
  },

  loginBox: {
    marginTop: (20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontFamily: GlobalStyle.fontSet.Poppins500,
    color: '#000',
    fontSize: (20),
    textAlign: 'left',
  },
  loginInputBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: (10),
    marginBottom: (10),
  },
  fieldSpace: {
    marginBottom: (20),
  },
  input: {
    color: '#000',
    height: (40),
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: (10),
    paddingRight: (10),
    fontFamily: GlobalStyle.fontSet.Poppins400,
    fontSize: (15),
  },
  btnDark: {
    backgroundColor: '#1B2C50',
    width: '100%',
    height: (42),
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1B2C50',
  },
  titleLight: {
    fontFamily: GlobalStyle.fontSet.Poppins500,
    fontSize: (15),
    color: '#FFFFFF',
  },
});
