import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';

interface InputFieldProps extends TextInputProps{
  label: string,
  icon: string,
  value: string,
  password?: boolean,
  errorText: string | undefined,
}

const FieldWrapper = styled.View`
  width: 100%;
  margin-bottom: 12px;
`;

const Label = styled.Text`
  margin-left: 32px;
  font-family: 'Poppins_400Regular';
  color: ${props => props.used && props.error ? '#ED3F62' : '#052377'};
`;

const LabelWrapper = styled.Text`
  font-size: ${props => props.using ? '10px' : '16px'};
  margin-top: ${props => props.using ? '0' : '16px'};
  position: absolute;
`;

const Input = styled.TextInput`
  border-bottom-color: ${props => props.used && props.error ? '#ED3F62' : '#052377'};
  padding-right: ${props => props.password? '24px' : '0px'};
  font-family: 'Poppins_400Regular';
  border-bottom-width: 1px;
  padding-bottom: 4px;
  padding-top: 14px;
  font-size: 16px;
`;

const Eye = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 8px;
  padding: 4px;
`;

const ErrorText = styled.Text`
  color: #ED3F62;
  font-size: 10px;
  text-align: right;
  margin-top: 2px;
  position: absolute;
  bottom: -16px;
  right: 0;
`;

const InputField: React.FC<InputFieldProps> = ({ label, icon, value, password, errorText, ...rest }) => {
  const [using, setUsing] = useState(false);
  const [used, setUsed] = useState(false);
  const [visible, setVisible] = useState(false);
  
  function handleUsingInput() {
    setUsing(true);
  }

  function handleBlurInput() {
    if (value === '') {
      setUsing(false);
    } else {
      setUsed(true); 
    }
  }

  function handleToggleVisible() {
    setVisible(prevVisible => !prevVisible);
  }

  return(
    <FieldWrapper>
      <LabelWrapper using={using}>
        <Label used={used} error={errorText}>
          <Feather name={icon} size={using? 8 : 16}/>
          {'    ' + label}
        </Label>
      </LabelWrapper>
      <Input
        onFocus={handleUsingInput}
        onBlur={handleBlurInput}
        secureTextEntry={password? !visible : false}
        error={errorText}
        used={used}
        {...rest}
      />
      {password && using && (
        <Eye onPress={handleToggleVisible}>
          <Feather
            color={used && errorText? "#ED3F62" : "#052377"}
            name={visible? 'eye' : 'eye-off'}
            size={16}
          />
        </Eye>
      )}
      <ErrorText>
        {used && errorText}
      </ErrorText>
      
    </FieldWrapper>
  )
}

export default InputField;