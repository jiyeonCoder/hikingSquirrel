import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Label, Input } from 'native-base';

export default function ItemInput({ title, setFunc }) {
  return (
    <Item floatingLabel last>
      <Label style={styles.label}>{title}</Label>
      <Input
        style={styles.input}
        onChangeText={(text) => {
          setFunc(text);
        }}
      />
    </Item>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#fff',
  },
  input: {
    color: '#fff',
  },
});
