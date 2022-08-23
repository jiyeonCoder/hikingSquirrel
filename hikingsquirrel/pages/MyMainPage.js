import React, { useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Content, Thumbnail, Text, Grid, Col } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageComponent from '../components/ImageComponent';

const squirrel = require('../assets/squirrel.png');
const data = require('../data.json');

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
        <Text style={styles.myTitle}>My HikingSquirrel</Text>
        <Text style={{ alignSelf: 'center' }}>jiyeon.choi218@gmail.com</Text>
        <TouchableOpacity>
          <Text style={styles.signOut}>Sign Out</Text>
        </TouchableOpacity>
        <Grid style={{ marginTop: 30 }}>
          <Col size={3} style={{ alignItems: 'center' }}>
            <Text style={styles.category}>작성한 글</Text>
            <Text style={styles.categoryContent}>7</Text>
          </Col>
          <Col size={3} style={{ alignItems: 'center' }}>
            <Text style={styles.category}>Comments</Text>
            <Text style={styles.categoryContent}>21</Text>
          </Col>
          <Col size={3} style={{ alignItems: 'center' }}>
            <Text style={styles.category}>방문 횟수</Text>
            <Text style={styles.categoryContent}>321</Text>
          </Col>
        </Grid>
        <Grid style={styles.imageWrap}>
          {data.diary.map((content, i) => {
            return <ImageComponent image={content.image} key={i} />;
          })}
        </Grid>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    alignSelf: 'center',
    marginTop: 10,
    width: 120,
    height: 120,
  },
  myTitle: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  signOut: {
    alignSelf: 'center',
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },
  category: {
    fontWeight: '700',
  },
  categoryContent: {
    color: 'deeppink',
    fontWeight: '700',
  },
  imageWrap: {
    flexWrap: 'wrap',
    marginTop: 20,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
});
