import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import n from '../../_helpers/normalize';
const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} style={{paddingLeft: n(15)}}>
      <Ionicons name="arrow-back" color={'black'} size={30} />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
