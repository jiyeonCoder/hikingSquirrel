import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

export default function MyMainPage({ navigation }) {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', (e) => {
      Alert.alert('로그인을 해주세요');
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <View>
      <Text>MyMainPage</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
