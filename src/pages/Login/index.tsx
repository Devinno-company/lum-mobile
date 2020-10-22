import React from 'react';
import { View } from 'react-native';

import AuthHeader from '../../components/AuthHeader';
import LoginFormSection from './LoginFormSection';

import styles from './styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <AuthHeader />
      <LoginFormSection />
    </View>
  )
}

export default Login;