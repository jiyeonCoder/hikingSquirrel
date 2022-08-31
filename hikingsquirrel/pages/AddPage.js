import React, { useState } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
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
  Thumbnail,
  Item,
  Input,
  Form,
  Textarea,
} from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
import style from 'react-native-image-blur-loading/src/style';
const background2 = require('../assets/background2.png');
const data = require('../data.json');
const imageWidth = Dimensions.get('window').width / 3;

export default function AddPage() {
  const [title, setTitle] = useState('');

  const upload = () => {
    console.log('Ready for Uploading');
    console.log(title);
  };
  return (
    <Container>
      <HeaderComponent />
      <Content>
        <Image
          source={background2}
          style={{ width: '95%', height: 100, borderRadius: 10 }}
        />
        <Grid style={styles.imageUpload}>
          <Text style={styles.imageUploadPlus}>+</Text>
        </Grid>
        <Item regular style={styles.title}>
          <Input
            placeholder="다이어리 제목을 입력해주세요!"
            style={{ fontSize: 13 }}
            onChangeText={(text) => setTitle(text)}
          />
        </Item>
        <Form style={styles.contentLayout}>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="내용을 입력해주세요"
            style={styles.content}
          />
        </Form>
        <Button full style={styles.uploadButton}>
          <Text>Upload</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  imageUpload: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey',
    borderStyle: 'dashed',
    width: '90%',
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  imageUploadPlus: {
    textAlign: 'center',
    width: '100%',
    fontSize: 90,
    fontWeight: '300',
    color: 'grey',
  },
  title: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  contentLayout: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  content: { borderRadius: 10, fontSize: 13 },
  uploadButton: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'pink',
  },
});
