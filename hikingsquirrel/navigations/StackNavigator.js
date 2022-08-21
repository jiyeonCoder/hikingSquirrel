import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailPage from '../pages/DetailPage';
import MyDetailPage from '../pages/MyDetailPage';
import RecordPage from '../pages/RecordPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Making components to pages */}
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
      <Stack.Screen name="MyDetailPage" component={MyDetailPage} />
      <Stack.Screen name="RecordPage" component={RecordPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
