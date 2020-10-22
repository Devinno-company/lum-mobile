import React from 'react';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';

import Login from '../pages/Login';
import Register from '../pages/Register';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';

const AuthStack = createStackNavigator();

const config: TransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 500,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator 
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: config,
          close: config
        }
      }}
    >
      <AuthStack.Screen name="Login" component={Login}/>
      <AuthStack.Screen name="Register" component={Register}/>
    </AuthStack.Navigator>
  )
}

export default AuthRoutes;