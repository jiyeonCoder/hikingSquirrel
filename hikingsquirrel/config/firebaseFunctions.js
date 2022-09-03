import AsyncStorage from '@react-native-async-storage/async-storage';
import * as firebase from 'firebase/compat';
import 'firebase/firestore';
import { Alert } from 'react-native';
//import 'firebase/storage';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

//Registration
export async function registration(nickName, email, password, navigation) {
  try {
    console.log(nickName, email, password);
    //Create a new user
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    //Save the user's info in the Cloud Firestore
    const db = firebase.firestore();
    db.collection('users').doc(currentUser.uid).set({
      email: currentUser.email,
      nickName: nickName,
      password: password,
    });
    console.log('CurrentUser: ');
    console.log(currentUser);
    Alert.alert('Signing Up Success!');
    //Prevent going back from this SignUpPage
    navigation.push('TabNavigator');
  } catch (err) {
    Alert.alert("There's an error! => ", err.message);
  }
}

//SignIn
export async function signIn(email, password, navigation) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    await AsyncStorage.setItem('session', email);
    await AsyncStorage.setItem('session2', password);
    console.log('login Success!!! :)');
    navigation.push('TabNavigator');
  } catch (err) {
    Alert.alert('There is an error logging in!', err.message);
  }
}

export async function signOut(navigation) {
  try {
    console.log('SignOut!!!');
    const currentUser = firebase.auth().currentUser;
    console.log('currentUser(singOut): ');
    console.log(currentUser);
    await AsyncStorage.removeItem('session');
    await AsyncStorage.removeItem('session2');
    await firebase.auth().signOut();
    navigation.push('SignInPage');
  } catch (err) {
    Alert.alert('An Issue accured in sign out', err.message);
  }
}

export async function addDiary(content) {
  try {
    const db = firebase.firestore();
    await db
      .collection('diary')
      .doc(content.date + 'J')
      .set(content);
    //console.log('number 2');
    return true;
  } catch (err) {
    Alert.alert('An Issue accured in adding the story!', err.message);
    return false;
  }
}

export async function imageUpload(blob, date) {
  const storage = getStorage();
  console.log(date);
  const storageRef = ref(storage, 'diary/' + date);
  // const storageRef = firebase
  //   .storage()
  //   .ref()
  //   .child('diary/' + date);
  console.log('Ready for Uploading3');
  await uploadBytes(storageRef, blob).then(() => {
    console.log('Uploaded a blob!');
    //imageUrl = snapshot.ref.getDownloadURL();
    //imageUrl = getDownloadURL(storageRef);
  });
  let imageUrl;
  await getDownloadURL(storageRef).then((url) => {
    imageUrl = url;
    console.log(imageUrl);
  });
  // const snapshot = await storageRef.put(blob);
  //const imageUrl = await snapshot.ref.getDownloadURL();
  blob.close();

  return imageUrl;
}
