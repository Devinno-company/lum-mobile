import React from 'react';
import { View } from 'react-native';

import AuthHeader from '../../components/AuthHeader';
import RegisterFormSection from './RegisterFormSection';

import styles from './styles';

const Register = () => {
  return (
    <View style={styles.container}>
      <AuthHeader />
      <RegisterFormSection />
    </View>
  )
}

export default Register;