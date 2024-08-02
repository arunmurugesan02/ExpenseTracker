import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Title2} from '../../constants/TypoGraphy';
import n from '../../_helpers/normalize';
import {TextInput} from 'react-native-gesture-handler';
import {LIGHT60, Manatee} from '../../constants/colors';
import {FullWidthButton} from '../../components/Button/CustomWidthButton';
import {CONTINUE, FORGOT_PASSWORD_DESC} from '../../constants/strings';

const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Title2 style={styles.forgotPasswordText}>
          {FORGOT_PASSWORD_DESC}
        </Title2>
        <TextInput
          placeholder="Email"
          placeholderTextColor={Manatee}
          style={styles.emailInputBox}
        />
        <FullWidthButton buttonText={CONTINUE} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  wrapper: {padding: n(16), paddingTop: n(70)},
  forgotPasswordText: {
    fontWeight: '600',
    lineHeight: n(30),
    paddingRight: n(20),
  },
  emailInputBox: {
    borderWidth: 1,
    padding: n(16),
    borderRadius: n(16),
    borderColor: LIGHT60,
    marginBottom: n(32),
    marginTop: n(46),
  },
});
