import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SignUpPage({ route }) {
  return (
    <View>
      <Text>SignUpPage</Text>
      <Text>{route.params.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
