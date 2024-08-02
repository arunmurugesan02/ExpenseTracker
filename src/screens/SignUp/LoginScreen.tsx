import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {LIGHT60, Manatee, VIOLET100} from '../../constants/colors';
import n from '../../_helpers/normalize';
import Feather from 'react-native-vector-icons/Feather';
import {FullWidthButton} from '../../components/Button/CustomWidthButton';
import {Regular1, Title3} from '../../constants/TypoGraphy';
import {useNavigation} from '@react-navigation/native';
import {FORGOTPASSWORD, LOGIN, SIGNUP} from '../../constants/strings';

const LoginScreen = () => {
  const navigation: any = useNavigation();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={Manatee}
          style={styles.emailInputBox}
        />
        <View style={styles.passwordWrapper}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={Manatee}
            style={styles.passwordInputBox}
          />
          <Pressable onPress={() => {}} style={styles.eyeIcon}>
            <Feather
              name={isPasswordSecure ? 'eye' : 'eye-off'}
              size={20}
              color={'black'}
            />
          </Pressable>
        </View>
        <FullWidthButton
          buttonText={LOGIN}
          onPress={() => {}}
          style={styles.loginButton}
        />
        <Title3 style={styles.forgotPasswordText}>{FORGOTPASSWORD}</Title3>
        <View style={styles.footerContainer}>
          <Regular1 style={styles.accountYetText}>
            Don’t have an account yet?{' '}
          </Regular1>
          <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
            <Regular1 style={styles.signUpText}>{SIGNUP}</Regular1>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  emailInputBox: {
    borderWidth: 1,
    padding: n(16),
    borderRadius: n(16),
    borderColor: LIGHT60,
    marginBottom: n(24),
  },
  passwordWrapper: {
    height: n(56),
    borderWidth: 1,
    borderRadius: n(16),
    borderColor: LIGHT60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passwordInputBox: {
    padding: n(16),
  },
  eyeIcon: {marginRight: n(20)},
  forgotPasswordText: {
    color: VIOLET100,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: n(38),
  },
  signUpText: {
    color: VIOLET100,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  accountYetText: {
    fontWeight: '500',
    color: Manatee,
  },
  loginButton: {marginVertical: n(40)},
  wrapper: {padding: n(16)},
});
