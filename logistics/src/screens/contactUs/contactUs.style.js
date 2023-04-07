/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';

export const styles = StyleSheet.create({
  contactContainer: {
    paddingHorizontal: normalize(20),
    // backgroundColor: '#fff',
    flex: 1,
  },

  contactBox: {
    marginTop: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontFamily: GlobalStyle.fontSet.Poppins500,
    color: '#222222',
    fontSize: normalize(20),
    textAlign: 'center',
  },
  contactInputBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: normalize(10),
    marginBottom: normalize(10),
  },
  fieldSpace: {
    marginBottom: normalize(20),
  },
  input: {
    height: normalize(40),
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: normalize(10),
    paddingRight: normalize(10),
    fontFamily: GlobalStyle.fontSet.Poppins400,
    fontSize: normalize(15),
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: normalize(10),
    textAlignVertical: 'top',
    fontSize: normalize(14),
    color: '#222222',
    fontFamily: GlobalStyle.fontSet.Poppins400,
    marginTop: normalize(10),
  },
  contactBtn: {
    backgroundColor: '#009640',
    width: '100%',
    height: normalize(40),
    justifyContent: 'center',
    alignContent: 'center',
  },
  actionTitle: {
    fontFamily: GlobalStyle.fontSet.Poppins500,
    fontSize: normalize(15),
  },
  contactInfoBox: {
    marginTop: normalize(25),
    marginBottom: normalize(25),
  },
  contactInfoTitle: {
    fontFamily: GlobalStyle.fontSet.Poppins500,
    color: '#222222',
    fontSize: normalize(20),
    paddingBottom: normalize(10),
  },
  contactDetails: {
    fontFamily: GlobalStyle.fontSet.Poppins400,
    color: '#222222',
    fontSize: normalize(15),
    paddingBottom: normalize(10),
  },
  label: {
    fontFamily: GlobalStyle.fontSet.Poppins500,
  },
});
