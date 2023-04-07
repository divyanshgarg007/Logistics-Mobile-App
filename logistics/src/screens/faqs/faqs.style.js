/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';

export const styles = StyleSheet.create({
      faqsContainer: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: normalize(20),
      },
      faqsBox: {
        marginTop: normalize(15),
        borderBottomWidth: 1,
        borderColor: '#ddd',
      },
    faqTitle: {
        color: '#000',
        fontSize: 15,
        fontFamily: GlobalStyle.fontSet.Poppins500,
    },
    faqdescription: {
        color: '#000',
        fontSize: 14,
        fontFamily: GlobalStyle.fontSet.Poppins400,
        paddingVertical: normalize(10),
    },
    contactBox: {
      marginTop: normalize(15),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      fontFamily: GlobalStyle.fontSet.Poppins500,
      color: '#000',
      fontSize: normalize(20),
      textAlign: 'center',
    },
});
