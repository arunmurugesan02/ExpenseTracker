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
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
        <View style={styles.wrapper}>
          <Text36 style={styles.verificationText}>
            Enter your Verification Code
          </Text36>
          <OTPTextView
            tintColor={VIOLET100}
            containerStyle={styles.containerStyle}
            handleTextChange={i => setOTPvalue(i)}
            textInputStyle={styles.textInputStyle}
          />
          <Title3 style={styles.timeText}>04.59</Title3>
          <Regular1 style={styles.descText}>
            We send verification code to your email{' '}
            <Regular1 style={styles.emailText}>
              brajaoma*****@gmail.com
            </Regular1>
            . You can check your inbox.
          </Regular1>
          <Regular1 style={styles.resendText}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  contentContainerStyle: {justifyContent: 'center', flex: 1},
  wrapper: {margin: n(16)},
  verificationText: {padding: n(10)},
  timeText: {color: VIOLET100, fontWeight: '600'},
  resendText: {
    fontWeight: '700',
    color: VIOLET100,
    textDecorationLine: 'underline',
    paddingBottom: n(46),
  },
  emailText: {color: VIOLET100},
  descText: {paddingVertical: n(16), fontWeight: '500'},
  textInputStyle: {
    width: 40,
    height: 50,
    borderColor: 'gray',
    borderRadius: 5,
  },
  containerStyle: {marginBottom: n(45)},
});
