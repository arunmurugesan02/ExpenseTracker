import {
  NavigationContainer,
  type ParamListBase,
} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LogBox} from 'react-native';
import {fontFamilies} from '../constants/size';
import OnBoardingScreen from '../screens/Onboarding';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import ref from './NavigationRef';
import OTPVerficationScreen from '../screens/SignUp/OTPVerificationScreen';
import BackButton from '../components/Button/BackButton';
import LoginScreen from '../screens/SignUp/LoginScreen';
import ForgotPasswordScreen from '../screens/SignUp/ForgotPasswordScreen';

export interface RootStackParamList extends ParamListBase {
  Public: undefined;
  Protected: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

function Navigator(): JSX.Element {
  LogBox.ignoreAllLogs();
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator initialRouteName="OnboardingScreen">
        <Stack.Screen
          name="OnboardingScreen"
          component={OnBoardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerTitle: 'Sign Up',
            headerTitleStyle: {
              fontFamily: fontFamilies.TEXT_800,
              fontSize: 25,
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="OTPVerificationScreen"
          component={OTPVerficationScreen}
          options={{
            headerTitle: 'Verification',
            headerTitleStyle: {
              fontFamily: fontFamilies.TEXT_800,
              fontSize: 25,
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerTitle: 'Login',
            headerTitleStyle: {
              fontFamily: fontFamilies.TEXT_800,
              fontSize: 25,
              fontWeight: '600',
            },
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{
            headerTitle: 'Forgot Password',
            headerTitleStyle: {
              fontFamily: fontFamilies.TEXT_800,
              fontSize: 25,
              fontWeight: '600',
            },
            headerLeft: () => <BackButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
