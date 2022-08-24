import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Icon,
  Text,
  Card,
  CardItem,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Button,
} from 'native-base';
import ImageBlurLoading from 'react-native-image-blur-loading';

const myImage = require('../assets/squirrelWithBackground.png');
const width = Dimensions.get('screen').width;

export default function CommentComponent({ navigation, content }) {
  return (
    <ListItem thumbnail style={{ width: width }}>
      <Left>
        <Thumbnail circular source={myImage} />
      </Left>
      <Body>
        <Text>HikingSquirrel</Text>
        <Text note numberOfLines={3}>
          It was great scenary!
        </Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>2022.08.24</Text>
        </Button>
      </Right>
    </ListItem>
  );
}

const styles = StyleSheet.create();
