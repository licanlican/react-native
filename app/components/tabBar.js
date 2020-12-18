import * as React from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Today from './today'
import More from './more'
const Tab = createBottomTabNavigator();
export default function App(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (route.name === 'Today') {
              icon = (<Ionicons name='today' size={size} color={color} />)
            } else if (route.name === '5-days') {
              icon = (<FontAwesome5 name="calendar-week" size={size} color={color} />)
            }
            return icon
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}

      >
        <Tab.Screen
          name="Today"
          component={Today} />
        <Tab.Screen name="5-days" component={More} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}