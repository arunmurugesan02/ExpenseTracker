import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Title2} from '../../constants/TypoGraphy';
import n from '../../_helpers/normalize';
import {TextInput} from 'react-native-gesture-handler';
import {LIGHT60, Manatee} from '../../constants/colors';
import {FullWidthButton} from '../../components/Button/CustomWidthButton';

const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: n(16), paddingTop: n(70)}}>
        <Title2
          style={{fontWeight: '600', lineHeight: n(30), paddingRight: n(20)}}>
          Don’t worry.{'\n'}Enter your email and we’ll send you a link to reset
          your password.
        </Title2>
        <TextInput
          placeholder="Email"
          placeholderTextColor={Manatee}
          style={{
            borderWidth: 1,
            padding: n(16),
            borderRadius: n(16),
            borderColor: LIGHT60,
            marginBottom: n(32),
            marginTop: n(46),
          }}
        />
        <FullWidthButton buttonText="Continue" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
