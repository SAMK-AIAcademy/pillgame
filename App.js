
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LevelMenu from "./screens/LevelMenu"
import TestScreen from "./screens/TestScreen"

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="levelmenu" 
        component={LevelMenu}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="testscreen" component={TestScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}









