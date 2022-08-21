import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
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
} from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
import CardComponent from '../components/CardComponent';

const data = require('../data.json');

export default function MapPage() {
  return (
    <Container>
      <HeaderComponent />
      <CardComponent />
    </Container>
  );
}

const styles = StyleSheet.create({});
