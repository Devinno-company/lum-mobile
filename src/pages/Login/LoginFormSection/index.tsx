import React from 'react';
import { Formik, Field } from 'formik';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
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

const LoginFormSection = () => {
  const navigation = useNavigation();
  const { logIn, error, setError, rememberMe, setRememberMe } = useAuth();

  const loginSchema = yup.object({
    email: yup.string()
      .required('Este campo é obrigatório')
      .email('O e-mail precisa ser válido'),
    
    password: yup.string()
      .required('Este campo é obrigatório')
      .min(8, 'Mínimo de 8 caracteres')
      .max(255, 'Máximo de 255 caracteres')
  });

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>

          <Formik
            initialValues={{
              email: '',
              password: '',
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
                  label="Senha"
                  icon="lock"
                  value={props.values.password}
                  onChangeText={props.handleChange('password')}
                  errorText={props.errors.password}
                  autoCapitalize="none"
                  password
                />

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    tintColors={{true: '#052377'}}
                    style={styles.checkbox}
                    value={rememberMe}
                    onTouchEnd={() => {setRememberMe(!rememberMe)}}
                  />
                  <Text style={styles.checkboxLabel}>Mantenha-me logado!</Text>
                </View>

                
                <Text style={styles.errorText}>{error}</Text>
                <GradientButton
                  label="Logar-se!"
                  colors={['#052377', '#2B8AFC']}
                  onPress={props.handleSubmit}
                />
              </>
            )}
          </Formik>

        <Text style={styles.subText}>Esqueceu sua senha? Recupere aqui</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.iconsContainer}>
            <GoogleIcon width={25} height={25} />
            <FacebookIcon width={25} height={25} />
            <TwitterIcon width={25} height={25} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.subTitle}>Não possui conta? Registrar-se!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginFormSection;