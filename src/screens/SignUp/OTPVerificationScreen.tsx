import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import n from '../../_helpers/normalize';
import {FullWidthButton} from '../../components/Button/CustomWidthButton';
import {VIOLET100} from '../../constants/colors';
import {Regular1, Text36, Title3} from '../../constants/TypoGraphy';

const OTPVerificationScreen = () => {
  const [OTPvalue, setOTPvalue] = useState<string>('');
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
      }}
      contentContainerStyle={{justifyContent: 'center', flex: 1}}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
        <View style={{margin: n(16)}}>
          <Text36 style={{padding: n(10)}}>Enter your Verification Code</Text36>
          <OTPTextView
            tintColor={VIOLET100}
            containerStyle={{marginBottom: n(45)}}
            handleTextChange={i => setOTPvalue(i)}
            textInputStyle={{
              width: 40, // Adjust width as needed
              height: 50, // Adjust height as needed
              borderColor: 'gray',
              borderRadius: 5,
            }}
          />
          <Title3 style={{color: VIOLET100, fontWeight: '600'}}>04.59</Title3>
          <Regular1 style={{paddingVertical: n(16), fontWeight: '500'}}>
            We send verification code to your email{' '}
            <Regular1 style={{color: VIOLET100}}>
              brajaoma*****@gmail.com
            </Regular1>
            . You can check your inbox.
          </Regular1>
          <Regular1
            style={{
              fontWeight: '700',
              color: VIOLET100,
              textDecorationLine: 'underline',
              paddingBottom: n(46),
            }}>
            I didn’t received the code? Send again
          </Regular1>
          <FullWidthButton
            buttonText="Verify"
            onPress={() => {}}
            primaryButton={true}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default OTPVerificationScreen;

const styles = StyleSheet.create({});
