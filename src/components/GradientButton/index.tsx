import React from 'react';
import { Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  submitButton: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  submitButtonWrapper: {
    width: 200,
    height: 32,
  },

  submitButtonText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
    color: '#FFFFFF'
  },
});

interface GradientButtonProps{
  label: string;
  colors: string[];
  onPress: VoidFunction;
}

const GradientButton: React.FC<GradientButtonProps> = ({ label, colors, onPress }) => {
  return (
    <TouchableOpacity style={styles.submitButtonWrapper} onPress={onPress}>
      <LinearGradient
        colors={colors}
        style={styles.submitButton}
        start={[0, 1]}
        end={[1, 0]}
      >
        <Text style={styles.submitButtonText}>{ label }</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default GradientButton;