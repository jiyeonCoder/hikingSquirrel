import * as firebase from 'firebase/compat';
import 'firebase/firestore';
import { Alert } from 'react-native';

export async function registration(nickName, email, password) {
  try {
    console.log(nickName, email, password);
    //Create a new user
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    //Save the user's info in the Cloud Firestore
    const db = firebase.firestore();
    db.collection('users')
      .doc(currentUser.uid)
      .set({ email: currentUser.email, nickName: nickName });
    console.log('CurrentUser: ');
    console.log(currentUser);
    Alert.alert('Signing Up Success!');
  } catch (err) {
    Alert.alert("There's an error! => ", err.message);
  }
}

export async function signIn(email, password, navigation) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log('login Success!!! :)');
    navigation.navigate('TabNavigator');
  } catch (err) {
    Alert.alert('There is an error logging in!', err.message);
  }
}
