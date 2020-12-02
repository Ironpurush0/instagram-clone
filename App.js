import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';

import firebase from 'firebase'
import config from './config'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


import Home from './screens/Home'
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import FeedScreen from './screens/FeedScreen'
import rootReducer from './store/reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

if(firebase.apps.length == 0){
  firebase.initializeApp(config)
}
export default function App({navigation}) {
  const [loading, setLoading] = useState(false)

  const Stack = createStackNavigator()

  firebase.auth().onAuthStateChanged(user => {
    if(!user){
      setLoading(true)
    } else {
      setLoading(false)
    }
  })

  // if(!loading){
  //   return <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
  //     <ActivityIndicator size="large" color="blue"  />
  //     <Text>You need to authenticate first</Text>
  //   </View>
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen}
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          component={Home} 
          name="Home" 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
