import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { Text, View } from 'react-native';
import * as yup from 'yup';

import { TouchableOpacity } from 'react-native-gesture-handler';
import FacebookIcon from '../../../assets/svg/iconsAPI/facebook.svg';
import TwitterIcon from '../../../assets/svg/iconsAPI/twitter.svg';
import GoogleIcon from '../../../assets/svg/iconsAPI/google.svg';
import GradientButton from '../../../components/GradientButton';
import { useNavigation } from '@react-navigation/native';
import InputField from '../../../components/InputField';
import { useAuth } from '../../../contexts/auth';

import styles from './styles';
import { equalTo } from '../../../utils/equalTo';

yup.addMethod(yup.string, 'equalTo', equalTo);

const RegisterFormSection = () => {
  const navigation = useNavigation();

  const [keepIn, setKeepIn] = useState(false);
  const { logIn } = useAuth();

  
  const loginSchema = yup.object({
    email: yup.string()
      .required('Este campo é obrigatório')
      .email('O e-mail precisa ser válido'),

    name: yup.string()
      .required('Este campo é obrigatório')
      .min(1, 'Mínimo de 1 caractere')
      .max(30, 'Máximo de 30 caracteres')
      .matches(/^[a-zA-Z]+$/ , 'Não é permitido caracteres especiais'),

    surname: yup.string()
      .required('Este campo é obrigatório')
      .min(1, 'Mínimo de 1 caractere')
      .max(100, 'Máximo de 100 caracteres')
      .matches(/^[a-zA-Z]+$/ , 'Não é permitido caracteres especiais'),
    
    password: yup.string()
      .required('Este campo é obrigatório')
      .min(8, 'Mínimo de 8 caracteres')
      .max(255, 'Máximo de 255 caracteres'),

    passwordConfirm: yup.string()
      .required('Este campo é obrigatório')
      .equalTo(yup.ref('password')),
  });

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
            validationSchema={loginSchema}
            onSubmit={logIn}
          >
            {(props) => (
              <>
                <Field
                  component={InputField}
                  label="Endereço de e-mail"
                  icon="mail"
                  value={props.values.email}
                  onChangeText={props.handleChange('email')}
                  errorText={props.errors.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <Field
                  component={InputField}
                  label="Nome"
                  icon="user"
                  value={props.values.name}
                  onChangeText={props.handleChange('name')}
                  errorText={props.errors.name}
                />

                <Field
                  component={InputField}
                  label="Sobrenome"
                  icon="user-plus"
                  value={props.values.surname}
                  onChangeText={props.handleChange('surname')}
                  errorText={props.errors.surname}
                  autoCapitalize="none"
                />

                <Field
                  component={InputField}
                  label="Senha"
                  icon="lock"
                  value={props.values.password}
                  onChangeText={props.handleChange('password')}
                  errorText={props.errors.password}
                  autoCapitalize="none"
                  password
                />

                <Field
                  component={InputField}
                  label="Confirmação de senha"
                  icon="unlock"
                  value={props.values.passwordConfirm}
                  onChangeText={props.handleChange('passwordConfirm')}
                  errorText={props.errors.passwordConfirm}
                  autoCapitalize="none"
                  password
                />

                <GradientButton
                  label="Logar-se!"
                  colors={['#052377', '#2B8AFC']}
                  onPress={props.handleSubmit}
                />
              </>
            )}
          </Formik>

        <Text style={styles.subText}>Voltar</Text>
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