import React, { useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Content, Thumbnail, Text } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';

const squirrel = require('../assets/squirrel.png');

export default function MyMainPage({ navigation }) {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', (e) => {
      Alert.alert('로그인을 해주세요');
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <Container>
      <HeaderComponent />
      <Content>
        <Thumbnail large source={squirrel} style={styles.thumbnail} />
        <Text style={styles.myTitle}>MySquirrel</Text>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    alignSelf: 'center',
    marginTop: 30,
  },
});
