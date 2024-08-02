import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import n from '../_helpers/normalize';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderTop = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Pressable
        style={{marginLeft: n(10)}}
        onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </Pressable>
    </SafeAreaView>
  );
};

export default HeaderTop;

const styles = StyleSheet.create({});
