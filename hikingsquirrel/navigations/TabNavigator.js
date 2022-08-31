import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapPage from '../pages/MapPage';
import FavoritesPage from '../pages/FavoritesPage';
import MyMainPage from '../pages/MyMainPage';
import AddPage from '../pages/AddPage';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const TabNavigator = ({ navigation, route }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';

          if (route.name === 'MapPage') {
            iconName += 'map';
          } else if (route.name === 'AddPage') {
            iconName += 'heart';
          } else if (route.name === 'MyMainPage') {
            iconName += 'person-circle';
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? 'hotpink' : 'grey'}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          height: 70,
          fontSize: 10,
        },
        //activeTintColor: 'tomato',
        //inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="MapPage" component={MapPage} />
      <Tabs.Screen name="AddPage" component={AddPage} />
      <Tabs.Screen name="MyMainPage" component={MyMainPage} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
