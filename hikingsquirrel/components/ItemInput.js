import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Label, Input, Text, View } from 'native-base';

export default function ItemInput({ title, type, setFunc, error }) {
  return (
    <View>
      <Item floatingLabel last>
        <Label style={styles.label}>{title}</Label>
        <Input
          style={styles.input}
          secureTextEntry={type == 'password' ? true : false}
          //A function that takes input right away
          onChangeText={(text) => {
            setFunc(text);
          }}
        />
      </Item>
      <Item style={{ borderColor: 'transparent' }}>
        <Text style={{ color: 'deeppink' }}>{error}</Text>
      </Item>
    </View>
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
