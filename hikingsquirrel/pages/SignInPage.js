import React, { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
} from 'native-base';
import ItemInput from '../components/ItemInput';
//import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { signIn } from '../config/firebaseFunctions';

const bImage = require('../assets/background.png');

export default function SignInPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  }, []);

  //Activate when SignUp button pressed
  const goSignUp = () => {
    navigation.navigate('SignUpPage', { title: '회원가입 페이지에서 왔음' });
  };

  //Activate when SignIn button pressed
  const doSignIn = () => {
    console.log(email);
    console.log(password);

    if (email == '') {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }

    if (password == '') {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }

    signIn(email, password, navigation);
  };

  const setEmailFunc = (itemInputEmail) => {
    setEmail(itemInputEmail);
  };

  const setPasswordFunc = (itemInputPassword) => {
    setPassword(itemInputPassword);
  };

  return (
    <Container>
      <ImageBackground source={bImage} style={styles.backgroundImage}>
        <Content contentContainerStyle={styles.content} scrollEnabled={true}>
          <Text style={styles.title}>
            <Text style={styles.highlite}>Hiking</Text>Squirrel
          </Text>
          <Form style={styles.form}>
            <ItemInput
              title={'Email'}
              type={'email'}
              setFunc={setEmailFunc}
              error={emailError}
            />
            <ItemInput
              title={'Password'}
              type={'password'}
              setFunc={setPasswordFunc}
              error={passwordError}
            />

            {/* <Item floatingLabel last>
              <Label style={styles.label}>Email</Label>
              <Input style={styles.input} />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.label}>Password</Label>
              <Input style={styles.input} />
            </Item> */}
          </Form>

          <Button full style={styles.emailSignIn} onPress={doSignIn}>
            <Text>Email SignIn</Text>
          </Button>
          <Button full style={styles.emailSignUp} onPress={goSignUp}>
            <Text style={{ color: '#333' }}>Go to SignUp</Text>
          </Button>
        </Content>
      </ImageBackground>
      <Content padder></Content>
    </Container>
    // <View>
    //   <Text>SignInPage</Text>
    //   <TouchableOpacity onPress={goSignUp}>
    //     <Text>회원가입 하러가기</Text>
    //   </TouchableOpacity>
    // </View>
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
