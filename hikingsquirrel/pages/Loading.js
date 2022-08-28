import React from 'react';
import { Container, Content, Thumbnail, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const LoadingImage = require('../assets/loading.gif');

export default function Loading() {
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <Thumbnail large source={LoadingImage} />
        <Text style={styles.title}>Hiking Squirrel</Text>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3DAE2',
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
});
