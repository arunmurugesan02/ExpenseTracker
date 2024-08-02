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
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation :any = useNavigation()
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <View style={{padding: n(16)}}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={Manatee}
          style={{
            borderWidth: 1,
            padding: n(16),
            borderRadius: n(16),
            borderColor: LIGHT60,
            marginBottom: n(24),
          }}
        />
        <View
          style={{
            height: n(56),
            borderWidth: 1,
            borderRadius: n(16),
            borderColor: LIGHT60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={Manatee}
            style={{
              padding: n(16),
            }}
          />
          <Pressable onPress={() => {}} style={{marginRight: n(20)}}>
            <Feather
              name={isPasswordSecure ? 'eye' : 'eye-off'}
              size={20}
              color={'black'}
            />
          </Pressable>
        </View>
        <FullWidthButton
          buttonText="Login"
          onPress={() => {}}
          style={{marginVertical: n(40)}}
        />
        <Title3
          style={{
            color: VIOLET100,
            textAlign: 'center',
            fontWeight: '600',
            marginBottom: n(38),
          }}>
          Forgot Password?
        </Title3>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Regular1
            style={{
              fontWeight: '500',
              color: Manatee,
            }}>
            Don’t have an account yet?{' '}
          </Regular1>
          <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
            <Regular1
              style={{
                color: VIOLET100,
                textDecorationLine: 'underline',
                fontWeight: '500',
              }}>
              Sign Up
            </Regular1>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
