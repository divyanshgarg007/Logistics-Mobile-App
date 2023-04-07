/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import GlobalStyle from '../../style/globalstyle';

export const styles = StyleSheet.create({
    welcomeContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    width: '100%',
    height: 100,
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeBox: {
    fontFamily: GlobalStyle.fontSet.Poppins600,
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: 20,
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
  btnLight: {
    backgroundColor: 'transparent',
    width: '100%',
    height: (42),
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1B2C50',
  },
  titleDark: {
    fontFamily: GlobalStyle.fontSet.Poppins500,
    fontSize: (15),
    color: '#1B2C50',
  },
});
