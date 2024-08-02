import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import n from '../../_helpers/normalize';
import {
  FullWidthButton,
  GoogleButton,
} from '../../components/Button/CustomWidthButton';
import {LIGHT60, Manatee, VIOLET100} from '../../constants/colors';
import {fontFamilies} from '../../constants/size';
import {Regular1} from '../../constants/TypoGraphy';
import {useNavigation} from '@react-navigation/native';
import {
  ALREADY_HAVE_AN_ACCOUNT,
  LOGIN,
  SIGNUP,
  SIGNUP_WITH_GOOGLE,
} from '../../constants/strings';
const SignUpScreen = () => {
  const navigation: any = useNavigation();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [checked, isChecked] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Name"
          placeholderTextColor={Manatee}
          style={styles.nameInputBox}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={Manatee}
          style={styles.nameInputBox}
        />
        <View style={styles.passwordContainer}>
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
        <View style={styles.agreeContainer}>
          <TouchableOpacity onPress={() => isChecked(!checked)}>
            <Fontisto
              name={checked ? 'checkbox-active' : 'checkbox-passive'}
              size={22}
              color={VIOLET100}
            />
          </TouchableOpacity>
          <Regular1 style={styles.agreeText1}>
            By signing up, you agree to the
            <Regular1 style={styles.agreeText2}>
              {' '}
              Terms of Service and Privacy Policy
            </Regular1>
          </Regular1>
        </View>
        <View style={styles.googleButtonWrapper}>
          <FullWidthButton buttonText={SIGNUP} onPress={() => {}} />
          <Regular1 style={styles.orWithText}>Or with</Regular1>
          <GoogleButton buttonText={SIGNUP_WITH_GOOGLE} onPress={() => {}} />
        </View>
        <View style={styles.loginContainer}>
          <Regular1>{ALREADY_HAVE_AN_ACCOUNT} </Regular1>
          <Pressable onPress={() => navigation.navigate('LoginScreen')}>
            <Regular1 style={styles.loginText}>{LOGIN}</Regular1>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  loginText: {textDecorationLine: 'underline', color: VIOLET100},
  container: {flex: 1, backgroundColor: 'white', justifyContent: 'center'},
  wrapper: {margin: n(16)},
  nameInputBox: {
    borderWidth: 1,
    padding: n(16),
    borderRadius: n(16),
    borderColor: LIGHT60,
    marginBottom: n(24),
  },
  passwordContainer: {
    height: n(56),
    borderWidth: 1,
    borderRadius: n(16),
    borderColor: LIGHT60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: n(24),
  },
  passwordInputBox: {
    padding: n(16),
  },
  eyeIcon: {marginRight: n(20)},
  agreeContainer: {
    flexDirection: 'row',
    gap: n(10),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: n(10),
  },
  agreeText1: {lineHeight: n(18), fontFamily: fontFamilies.TEXT_500},
  agreeText2: {color: VIOLET100},
  googleButtonWrapper: {gap: n(16), marginTop: n(27)},
  orWithText: {color: Manatee, textAlign: 'center', fontWeight: '700'},
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: n(19),
  },
});
