import * as firebase from 'firebase/compat';
import 'firebase/firestore';
import { Alert } from 'react-native';

export async function registration(nickName, email, password) {
  try {
    console.log(nickName, email, password);
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    console.log(currentUser);
    Alert.alert('Signing Up Success!');
  } catch (err) {
    Alert.alert("There's an error! => ", err.message);
  }
}
