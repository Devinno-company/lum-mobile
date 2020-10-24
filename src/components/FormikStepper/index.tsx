import React, { SetStateAction } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import GradientButton from '../GradientButton';

import styles from './styles';

interface FormikStepperProps {
  formProps: any;
  step: number;
  setStep(value: SetStateAction<number>): void;
}

const ProgressBar = styled.View`
  flex: 1;
  border-width: 1px;
  border-color: #08359B;
  height: 6px;
  margin-right: 1px;
  margin-left: 1px;
  border-radius: 4px;
  background-color: ${props => props.progress ? '#08359B' : '#FFFFFF'};
`;

const FormikStepper: React.FC<FormikStepperProps> = ({ children, formProps, step, setStep }) => {
  const childrenArray = React.Children.toArray(children);
  const currentChild = childrenArray[step];

  function handleSubmit() {
    formProps.handleSubmit();
  }

  return (
    <View style={styles.stepWrapper}>
      <View style={styles.formWrapper}>
        <View style={styles.progressWrapper}>
          <ProgressBar progress={step >= 0}></ProgressBar>
          <ProgressBar progress={step >= 1}></ProgressBar>
          <ProgressBar progress={step >= 2}></ProgressBar>
        </View>
        {currentChild}
      </View>

      <View style={styles.buttonWrapper}>
        <GradientButton
          label={step >= childrenArray.length - 1 ? 'Confirmar' : 'Próximo passo'}
          colors={['#052377', '#2B8AFC']}
          onPress={handleSubmit}
          />
        {step > 0 ? (
          <TouchableOpacity onPress={() => setStep(prevStep => prevStep - 1)}>
            <Text style={styles.subText}>Voltar</Text>
          </TouchableOpacity>
          ) : <Text style={styles.subText}></Text> }
      </View>
    </View>
  )
}

export default FormikStepper;