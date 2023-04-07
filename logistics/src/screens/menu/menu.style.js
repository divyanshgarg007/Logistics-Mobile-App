/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';

export const styles = StyleSheet.create({
  menuContainer: {
    paddingTop: normalize(15),
    backgroundColor: '#fff',
    flex: 1,
  },
  menuLists: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  menuItems: {
    fontSize: normalize(15),
    color: '#222222',
    fontFamily: GlobalStyle.fontSet.Poppins400,
    paddingHorizontal: normalize(25),
    paddingVertical: normalize(15),
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(22),
    paddingBottom: normalize(15),
  },
  loginInfo: {
    padding: 0,
  },
  userName: {
    fontSize: normalize(15),
    color: '#222222',
    fontFamily: GlobalStyle.fontSet.Poppins400,
    paddingLeft: normalize(10),
  },
  userIcon: {
    color: '#E04D01CC',
    padding: normalize(7),
    borderRadius: 100,
  },
  closeMenu: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: normalize(15),
    marginBottom: normalize(10),
  },
  signInBtn: {
    color: '#E04D01',
    fontSize:normalize(15),
    fontFamily: GlobalStyle.fontSet.Poppins400,
    paddingHorizontal: normalize(25),
    paddingVertical: normalize(15),
  },
  signOut: {
    fontSize: normalize(15),
    color: '#222222',
    fontFamily: GlobalStyle.fontSet.Poppins400,
    paddingHorizontal: normalize(25),
    paddingVertical: normalize(15),
  },
  loginBox:{ borderBottomColor: '#ddd',
  borderBottomWidth: 1, width: '100%'},

});
