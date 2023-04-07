/* eslint-disable prettier/prettier */
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet, View} from 'react-native';
import GlobalStyle from '../style/globalstyle';
import { Icon } from 'react-native-elements';

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

export default function SelectDropDown(props) {
  return (
    <View style={styles.quantityInputBox}>
      <SelectDropdown
        disabled={props?.disable}
        data={countries}
        renderDropdownIcon={() => (
          <Icon size={20} name="chevron-down" type="entypo" color="#000" />
        )}
        buttonTextStyle={styles.cartselectItem}
        buttonStyle={styles.cartselectBtn}
        rowTextStyle={styles.cartdropDownBoxItem}
        rowStyle={styles.cartdropDownBox}
        defaultButtonText={props?.unitPriceName}
        onSelect={(selectedItem, index) => {
          props?.setUnitPrice(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  quantityInputBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  cartselectItem: {
    fontSize: (14),
    color: '#222222',
    fontFamily: GlobalStyle.fontSet.Poppins400,
    textAlign: 'left',
    marginLeft: (3),
  },
  cartselectBtn: {
    backgroundColor: '#fff',
    width: '100%',
    height: 30,
  },
  cartdropDownBoxItem: {
    fontSize: (13),
    color: '#222222',
    fontFamily: GlobalStyle.fontSet.Poppins400,
    textAlign: 'left',
    padding: (10),
  },
  cartdropDownBox: {
    height: (44),
  },
});
