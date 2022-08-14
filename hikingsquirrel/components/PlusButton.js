import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function PlusButton({ Plus }) {
  return (
    <TouchableOpacity onPress={Plus} style={styles.container}>
      <Text>PlusButton</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'yellow',
    height: 40,
  },
});
