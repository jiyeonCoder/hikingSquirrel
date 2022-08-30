import AsyncStorage from '@react-native-async-storage/async-storage';
import * as firebase from 'firebase/compat';
import 'firebase/firestore';
import { Alert } from 'react-native';

//Registration
export async function registration(nickName, email, password, navigation) {
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
    console.log(currentUser);
    await AsyncStorage.removeItem('session');
    await firebase.auth().signOut();
    navigation.push('SignInPage');
  } catch (err) {
    Alert.alert('An Issue accured in sign out', err.message);
  }
}
