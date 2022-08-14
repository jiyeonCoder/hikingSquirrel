import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailPage from '../pages/DetailPage';
import MapPage from '../pages/MapPage';
import MyDetailPage from '../pages/MyDetailPage';
import MyMainPage from '../pages/MyMainPage';
import RecordPage from '../pages/RecordPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
          borderBottomColor: 'black',
          shadowColor: 'black',
          height: 100,
        },
        headerTintColor: '#FFFFFF',
        headerBackTitleVisible: false,
      }}
    >
      {/* Making components to pages */}
      <Stack.Screen name="DetailPage" component={DetailPage} />
      <Stack.Screen name="MapPage" component={MapPage} />
      <Stack.Screen name="MyDetailPage" component={MyDetailPage} />
      <Stack.Screen name="MyMainPage" component={MyMainPage} />
      <Stack.Screen name="RecordPage" component={RecordPage} />
      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
