import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
  Header,
  Left,
  Icon,
  Body,
  Right,
} from 'native-base';
import ItemInput from '../components/ItemInput';
import { registration } from '../config/firebaseFunctions';

const bImage = require('../assets/background.png');

export default function SignUpPage({ navigation }) {
  const [nickName, setNickName] = useState('');
  const [nickNameError, setNickNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const doSignUp = () => {
    if (nickName == '') {
      setNickNameError('Nickname is required');
      return false;
    } else {
      setNickNameError('');
    }

    if (email == '') {
      setEmailError('Email is required');
      return false;
    } else {
      setEmailError('');
    }

    if (password == '') {
      setPasswordError('Password is required');
      return false;
    } else {
      setPasswordError('');
    }

    if (confirmPassword == '') {
      setConfirmPasswordError('Please retype your password');
      return false;
    } else {
      setConfirmPasswordError('');
    }

    registration(nickName, email, password);
  };

  return (
    <Container>
      <ImageBackground source={bImage} style={styles.backgroundImage}>
        <Header transparent>
          <Left>
            <Button
              transparent
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="arrow-back" style={{ color: '#fff' }} />
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
        <Content contentContainerStyle={styles.content} scrollEnabled={true}>
          <Text style={styles.title}>
            <Text style={styles.highlite}>Hiking</Text>Squirrel Signup
          </Text>
          <Form style={styles.form}>
            <ItemInput
              title={'Nickname'}
              type={'nickName'}
              setFunc={setNickName}
              error={nickNameError}
            />
            <ItemInput
              title={'Email'}
              type={'email'}
              setFunc={setEmail}
              error={emailError}
            />
            <ItemInput
              title={'Password'}
              type={'password'}
              setFunc={setPassword}
              error={passwordError}
            />
            <ItemInput
              title={'Confirm Password'}
              type={'password'}
              setFunc={setConfirmPassword}
              error={confirmPasswordError}
            />
          </Form>
          <Button full style={styles.emailSignIn} onPress={doSignUp}>
            <Text>Sign Up</Text>
          </Button>
        </Content>
      </ImageBackground>
      <Content padder></Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    margin: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  highlite: {
    fontSize: 25,
    fontWeight: '700',
    color: 'deeppink',
    textAlign: 'center',
  },
  form: {
    width: 250,
    borderRadius: 10,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
  },
  label: {
    color: '#fff',
  },
  input: {
    color: '#fff',
  },
  emailSignIn: {
    alignSelf: 'center',
    width: 250,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#333',
  },
  emailSignUp: {
    alignSelf: 'center',
    width: 250,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#333',
  },
});
