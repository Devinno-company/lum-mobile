import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Formik, Field } from 'formik';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';

import { TouchableOpacity } from 'react-native-gesture-handler';
import FacebookIcon from '../../../assets/svg/iconsAPI/facebook.svg';
import TwitterIcon from '../../../assets/svg/iconsAPI/twitter.svg';
import GoogleIcon from '../../../assets/svg/iconsAPI/google.svg';
import InputField from '../../../components/InputField';
import { useAuth } from '../../../contexts/auth';
import FormikStepper from '../../../components/FormikStepper';

import styles from './styles';
import { equalTo } from '../../../utils/equalTo';

yup.addMethod(yup.string, 'equalTo', equalTo);

const RegisterFormSection = () => {
  const navigation = useNavigation();

  const [step, setStep] = useState(0);
  const {  } = useAuth();

  const registerSchema = [
    yup.object({
      email: yup.string()
        .required('Este campo é obrigatório')
        .email('O e-mail precisa ser válido'),
    }),
    yup.object({
      name: yup.string()
        .required('Este campo é obrigatório')
        .min(1, 'Mínimo de 1 caractere')
        .max(30, 'Máximo de 30 caracteres')
        .matches(/^[a-zA-Z\ ]+$/ , 'Não é permitido caracteres especiais'),

      surname: yup.string()
        .required('Este campo é obrigatório')
        .min(1, 'Mínimo de 1 caractere')
        .max(100, 'Máximo de 100 caracteres')
        .matches(/^[a-zA-Z\ ]+$/ , 'Não é permitido caracteres especiais'),
    }),
    yup.object({
      password: yup.string()
        .required('Este campo é obrigatório')
        .min(8, 'Mínimo de 8 caracteres')
        .max(255, 'Máximo de 255 caracteres'),

      passwordConfirm: yup.string()
        .required('Este campo é obrigatório')
        //@ts-ignore
        .equalTo(yup.ref('password')),
    }),
  ]

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Cadastro</Text>
          <Formik
            initialValues={{
              email: '',
              name: '',
              surname: '',
              password: '',
              passwordConfirm: '',
            }}
            validationSchema={registerSchema[step]}
            onSubmit={(values, helpers) => {
              if (step === 2) {
                 console.log(values);
              } else {
                setStep(prevStep => prevStep + 1)
              }
            }}
          >
            
            {(props) => (
              <>
                <FormikStepper
                  step={step}
                  setStep={setStep}
                  formProps={props}
                >
                  <View style={styles.formStep}>
                    <InputField
                      label="Endereço de e-mail"
                      icon="mail"
                      value={props.values.email}
                      onChangeText={props.handleChange('email')}
                      errorText={props.errors.email}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>
              
                  <View style={styles.formStep}>
                    <InputField
                      label="Nome"
                      icon="user"
                      value={props.values.name}
                      onChangeText={props.handleChange('name')}
                      errorText={props.errors.name}
                      autoCapitalize="words"
                    />
                    <InputField
                      label="Sobrenome"
                      icon="user-plus"
                      value={props.values.surname}
                      onChangeText={props.handleChange('surname')}
                      errorText={props.errors.surname}
                      autoCapitalize="words"
                    />
                  </View> 
                
                  <View style={styles.formStep}>
                    <InputField
                      label="Senha"
                      icon="lock"
                      value={props.values.password}
                      onChangeText={props.handleChange('password')}
                      errorText={props.errors.password}
                      autoCapitalize="none"
                      password
                    />
                    <InputField
                      label="Confirmação de senha"
                      icon="unlock"
                      value={props.values.passwordConfirm}
                      onChangeText={props.handleChange('passwordConfirm')}
                      errorText={props.errors.passwordConfirm}
                      autoCapitalize="none"
                      password
                    />
                  </View>
                
                </FormikStepper>
              </>
            )}
          </Formik>
      </View>

      <View style={styles.footer}>
        <View style={styles.iconsContainer}>
            <GoogleIcon width={25} height={25} />
            <FacebookIcon width={25} height={25} />
            <TwitterIcon width={25} height={25} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.subTitle}>Já possui conta? Logar-se!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RegisterFormSection;