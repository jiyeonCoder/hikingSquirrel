import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Alert,
  Platform,
} from 'react-native';
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
  Pressable,
  TouchableOpacity,
} from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
import style from 'react-native-image-blur-loading/src/style';
import * as firebase from 'firebase/compat';
import 'firebase/firestore';
import { addDiary, imageUpload } from '../config/firebaseFunctions';
import * as ImagePicker from 'expo-image-picker';

const background2 = require('../assets/background2.png');
const data = require('../data.json');
const imageWidth = Dimensions.get('window').width / 3;

const tempImage =
  'https://firebasestorage.googleapis.com/v0/b/sparta-study-plus.appspot.com/o/lecture%2F6-min.png?alt=media&token=bbc87679-4084-40ad-b6cd-01e808983fa4';

export default function AddPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(tempImage);
  const [imageUri, setImageUri] = useState('');

  useEffect(() => {
    getPermission();
  }, []);

  //Determines the status of the permission to access photos
  const getPermission = async () => {
    if (Platform.os !== 'web') {
      //Ask whether to give permission
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission is required to access your Photos');
      }
    }
  };

  const upload = async () => {
    console.log('Ready for Uploading');
    const currentUser = firebase.auth().currentUser;
    console.log('Ready for Uploading2');
    let date = new Date();
    let getTime = date.getTime();
    let data = {
      title: title,
      author: currentUser.email,
      desc: content,
      image: image,
      date: date.getTime(),
      uid: currentUser.uid,
    };

    //Get the image file data
    const response = await fetch(imageUri);
    //Convert imageData to available image data type as blob readable by Firebase
    const blob = await response.blob();
    const imageUrl = await imageUpload(blob, getTime);
    data.image = imageUrl;
    console.log(data);

    console.log('Ready for Uploading4');
    let result = await addDiary(data);
    console.log('3 Result: ');
    console.log(result);
    if (result) {
      console.log('Added!');
      Alert.alert('Added new story successfully!');
    } else {
      Alert.alert('Error!');
    }
  };

  //Get the Image information from the user's photo album
  const pickImage = async () => {
    console.log('Image selected!');
    let imageData = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(imageData);
    getImageUrl(imageData);
  };

  const getImageUrl = async (imageData) => {
    setImageUri(imageData.uri);
    //const date=new Date();
    //imageUpload(blob, date.getTime());
  };

  return (
    <Container>
      <HeaderComponent />
      <Content>
        <Image
          source={background2}
          style={{ width: '95%', height: 100, borderRadius: 10 }}
        />
        {imageUri == '' ? (
          <Grid style={styles.imageUpload} onPress={() => pickImage()}>
            <Text style={styles.imageUploadPlus}>+</Text>
          </Grid>
        ) : (
          // <Grid style={styles.imageWrapPreview} onPress={() => pickImage()}>
          //   <Image source={{ uri: imageUri }} style={styles.imagePreview} />
          // </Grid>
          <Image source={{ uri: imageUri }} style={styles.imagePreview} />
        )}
        <Item regular style={styles.title}>
          <Input
            placeholder="Type the title"
            style={{ fontSize: 13 }}
            onChangeText={(text) => setTitle(text)}
          />
        </Item>
        <Form style={styles.contentLayout}>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="Type the content"
            style={styles.content}
            onChangeText={(text) => setContent(text)}
          />
        </Form>
        <Button full style={styles.uploadButton} onPress={() => upload()}>
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
  imageWrapPreview: {
    alignSelf: 'center',
  },
  imagePreview: {
    borderRadius: 10,
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
