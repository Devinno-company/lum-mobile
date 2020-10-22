import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';

import { useAuth } from '../contexts/auth';
import GradientButton from '../components/GradientButton';

const AppStack = createStackNavigator();

const AuthRoutes = () => {
  const { logOut } = useAuth();

  return (
      <View style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Text>APP STACK WORKS!</Text>
        <GradientButton label="Deslogar" onPress={logOut} colors={['#052377', '#2B8AFC']}/>
        {/*<AppStack.Navigator screenOptions={{ headerShown: false }}></AppStack.Navigator>*/}
      </View>
  )
}

export default AuthRoutes;