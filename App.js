import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/pages/HomeScreen';
import WhatScreen from './src/pages/WhatScreen';
import HowScreen from './src/pages/HowScreen';
import SamplesScreen from './src/pages/SamplesScreen';
import AboutUsScreen from './src/pages/AboutUsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, statusBarHidden:true,}}/>
        <Stack.Screen name="What" component={WhatScreen} options={{headerShown: true, statusBarHidden:true, headerTransparent:true, headerTitle:"O que é ?", headerTitleAlign:'center', headerTitleStyle:{fontWeight:'bold', color:'white', fontSize:30},}}/>
        <Stack.Screen name="How" component={HowScreen} options={{headerShown: true, statusBarHidden:true, headerTransparent:true, headerTitle:"Como funciona ?", headerTitleAlign:'center', headerTitleStyle:{fontWeight:'bold', color:'white', fontSize:30},}}/>
        <Stack.Screen name="Samples" component={SamplesScreen} options={{headerShown: true, statusBarHidden:true, headerTransparent:true, headerTitle:"Curiosidades", headerTitleAlign:'center', headerTitleStyle:{fontWeight:'bold', color:'white', fontSize:30},}}/>
        <Stack.Screen name="AboutUs" component={AboutUsScreen} options={{headerShown: true, statusBarHidden:true, headerTransparent:true, headerTitle:"Sobre nós", headerTitleAlign:'center', headerTitleStyle:{fontWeight:'bold', color:'white', fontSize:30},}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

