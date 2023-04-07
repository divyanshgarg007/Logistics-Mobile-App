/* eslint-disable prettier/prettier */
import React from 'react';
import { TextInput } from 'react-native';

export default function CustomTextInput(props) {

  return (
      <TextInput
        style={props.style}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        value={props.value}
        onChangeText={props.onChangeText}
        // onChange={props.onChange}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        onSubmitEditing={props.onSubmitEditing}
      />
  );
}
