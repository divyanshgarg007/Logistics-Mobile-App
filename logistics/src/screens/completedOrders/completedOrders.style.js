/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import GlobalStyle from '../../style/globalstyle';

export const styles = StyleSheet.create({
    dashboardContainer: {
    paddingTop: (0),
    backgroundColor: '#fff',
    flex: 1,
  },

  dashboardTitle: {
    marginTop: (20),
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontFamily: GlobalStyle.fontSet.Poppins600,
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
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
  createBtn: {
    marginTop: 25,
    width: '65%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingHorizontal: (20),
  },
});
