import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Card,
  Container,
  Content,
  Item,
  Text,
  Input,
  Icon,
  List,
} from 'native-base';
import ImageBlurLoading from 'react-native-image-blur-loading';
import CommentComponent from '../components/CommentComponent';

export default function DetailPage({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      title: 'Detail Page',
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: '#fff',
      },
      headerTintColor: 'grey',
      headerShown: true,
      headerBackTitleVisible: false,
    });
  }, []);
  // console.log('ROUTE');
  // console.log(route);

  const content = route.params.content;

  return (
    <Container>
      <Content contentContainerStyle={{ alignItems: 'center', marginTop: 20 }}>
        <ImageBlurLoading
          withIndicator
          thumbnailSource={{ uri: content.image }}
          source={{ uri: content.image }}
          style={{ width: '90%', height: 200, borderRadius: 10 }}
        />
        <Text style={styles.detailTitle}>{content.title}</Text>
        <Text style={styles.detailDesc}>{content.desc}</Text>

        <Item>
          <Input placeholder="Leave Your Comment" />
          <Icon active name="paper-plane" />
        </Item>
        <List>
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
        </List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  detailTitle: {
    fontSize: 25,
    marginLeft: 25,
    marginTop: 20,
    fontWeight: '700',
    color: '#333',
    alignSelf: 'flex-start',
  },
  detailDesc: {
    fontSize: 15,
    fontWeight: '700',
    color: 'grey',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 20,
  },
});
