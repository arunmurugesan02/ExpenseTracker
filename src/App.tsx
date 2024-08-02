import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './navigation/Navigator';
import  React from 'react';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Navigator />;
};

export default App;

const styles = StyleSheet.create({});
