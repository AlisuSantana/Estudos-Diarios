import React from 'react';
import View from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Update from './Update';
import Show from './Show';
import Header from '../Components/Header';
const Stack = createStackNavigator();


export default function App()  {
 
 return(
   <NavigationContainer independent={true}>
   <Stack.Navigator initialRouteName='Show'> 
       <Stack.Screen name='Show' component={Show} /> 
       <Stack.Screen name="Update" component={Update}  />
   </Stack.Navigator>
   </NavigationContainer>
 )}
