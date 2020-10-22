import React from 'react';
import { View, Text, Image } from 'react-native';

import backgroundImg from '../../assets/images/Banner.png';

import styles from './styles';

const AuthHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={backgroundImg} style={styles.background} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>LUM</Text>
        <Text style={styles.subTitle}>organizador</Text>
      </View>
    </View>
  )
}

export default AuthHeader;