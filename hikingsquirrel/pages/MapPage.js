import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Right,
  Text,
  Button,
} from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
import CardComponent from '../components/CardComponent';
import * as Animatable from 'react-native-animatable';
import { getData } from '../config/firebaseFunctions';

//const data = require('../data.json');

export default function MapPage({ navigation }) {
  const [data, setData] = useState([]);

  // const goDetailPage = () => {
  //   navigation.navigate('DetailPage', { title: '메인 페이지에서 왔음' });
  // };

  //prevent going back from this MapPage
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      console.log('aaabbbccc');
    });
    readyData();
  }, []);

  const readyData = async () => {
    const data = await getData();
    setData(data);
  };

  return (
    <Container>
      <HeaderComponent />
      <Content>
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount={'infinite'}
          direction="alternate"
        >
          <Grid style={styles.banner}>
            <Col size={1} style={{ padding: 20 }}>
              <Icon name="paper-plane" style={{ color: 'deeppink' }} />
            </Col>
            <Col size={6} style={{ padding: 15 }}>
              <Text>Track of your Hiking</Text>
              <Text>
                with <Text style={{ fontWeight: '700' }}>HikingSquirrel!</Text>
              </Text>
            </Col>
          </Grid>
        </Animatable.View>

        <Grid style={{ padding: 20 }}>
          <Text style={{ color: 'grey' }}>FROM THE DIARY</Text>
        </Grid>
        <View style={{ marginTop: -20 }}>
          {data.map((content, i) => {
            return (
              <CardComponent
                content={content}
                key={i}
                navigation={navigation}
              />
            );
          })}
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#F6F6F6',
    height: 70,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
  },
});
