import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RideScreen from '../screens/Ride';
import RideHistoryScreen from '../screens/RideHistory';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Ride"
            component={RideScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bike" color={'cyan'} size={25} />
              ),
            }}
          />

          <Tab.Screen
            name="RideHistory"
            component={RideHistoryScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="history"
                  color={'cyan'}
                  size={25}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
