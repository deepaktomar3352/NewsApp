import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import All from "../src/screens/All"
import Business from '../src/screens/Business';
import Health from '../src/screens/Health';
import Sports from '../src/screens/Sports';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="All"
          component={All}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              
              <FontAwesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Business"
          component={Business}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="briefcase" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Health"
          component={Health}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Sports"
          component={Sports}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="basketball" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
