/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GlobalStyle from '../style/globalstyle';

export default function EmptyMessage(props) {
  return (
    <View style={styles.emptyBox}>
      <Text style={styles.emptyTitle}>{props.title}</Text>
    </View>
  );
}
export const styles = StyleSheet.create({
  emptyBox: {
    paddingHorizontal: (15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    textAlign: 'center',
    fontSize: (16),
    fontFamily: GlobalStyle.fontSet.Poppins500,
    color: 'gray',
  },
});
