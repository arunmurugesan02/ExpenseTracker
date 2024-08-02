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
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {
  const navigation:any = useNavigation()
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [checked, isChecked] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white' , justifyContent:'center'}}>
      <View style={{margin: n(16)}}>
        <TextInput
          placeholder="Name"
          placeholderTextColor={Manatee}
          style={{
            borderWidth: 1,
            padding: n(16),
            borderRadius: n(16),
            borderColor: LIGHT60,
            marginBottom: n(24),
          }}
        />
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
            marginBottom: n(24),
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
        <View
          style={{
            flexDirection: 'row',
            gap: n(10),
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: n(10)
          }}>
          <TouchableOpacity onPress={() => isChecked(!checked)}>
            <Fontisto
              name={checked ? 'checkbox-active' : 'checkbox-passive'}
              size={22}
              color={VIOLET100}
            />
          </TouchableOpacity>
          <Regular1
            style={{lineHeight: n(18), fontFamilies: fontFamilies.TEXT_500}}>
            By signing up, you agree to the
            <Regular1 style={{color: VIOLET100}}>
              {' '}
              Terms of Service and Privacy Policy
            </Regular1>
          </Regular1>
        </View>
        <View style={{gap: n(16), marginTop: n(27)}}>
          <FullWidthButton buttonText="Sign Up" onPress={() => {}} />
          <Regular1
            style={{color: Manatee, textAlign: 'center', fontWeight: '700'}}>
            Or with
          </Regular1>
          <GoogleButton buttonText="Sign Up with Google " onPress={() => {}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: n(19),
          }}>
          <Regular1>Already have an account? </Regular1>
          <Pressable onPress={()=>navigation.navigate('LoginScreen')}>
            <Regular1
              style={{textDecorationLine: 'underline', color: VIOLET100}}>
              Login
            </Regular1>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
