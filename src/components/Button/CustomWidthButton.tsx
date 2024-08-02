import React from 'react';
import {ActivityIndicator, Pressable, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Feather from 'react-native-vector-icons/Feather';
import n from '../../_helpers/normalize';
import {
  DARK50,
  LIGHT100,
  LIGHT60,
  LIGHT80,
  VIOLET100,
  VIOLET20,
} from '../../constants/colors';
import {Title3} from '../../constants/TypoGraphy';

const styles = StyleSheet.create({
  fullwidth: {
    width: '100%',
    padding: n(8),
    borderRadius: n(16),
    alignItems: 'center',
    justifyContent: 'center',
    height: n(56),
  },
  smallwidth: {
    width: '100%',
    padding: n(8),
    borderRadius: n(16),
    alignItems: 'center',
    justifyContent: 'center',
    height: n(56),
  },
  loader: {
    padding: n(8),
  },
  buttonWrapper: {
    flexDirection: 'row',
    gap: n(10),
  },
});

export const FullWidthButton = ({
  disable = false,
  textColor = LIGHT80,
  buttonText = '',
  onPress = () => {},
  style = {},
  plusButton = false,
  primaryButton = true,
}): JSX.Element => (
  <Pressable
    disabled={disable}
    onPress={onPress}
    style={[
      styles.fullwidth,
      {backgroundColor: primaryButton ? VIOLET100 : VIOLET20},
      style,
    ]}>
    {!disable ? (
      <View style={styles.buttonWrapper}>
        {plusButton && (
          <Feather
            name="plus-square"
            size={15}
            color={primaryButton ? textColor : VIOLET100}
          />
        )}

        <Title3 style={{color: primaryButton ? textColor : VIOLET100}}>
          {buttonText}
        </Title3>
      </View>
    ) : (
      <ActivityIndicator style={styles.loader} color={LIGHT100} />
    )}
  </Pressable>
);

export const HalfWidthButton = ({
  disable = false,
  textColor = LIGHT80,
  buttonText = '',
  onPress = () => {},
  style = {},
  plusButton = false,
  primaryButton = true,
}): JSX.Element => (
  <Pressable
    disabled={disable}
    onPress={onPress}
    style={[
      styles.smallwidth,
      {backgroundColor: primaryButton ? VIOLET100 : VIOLET20},
      style,
    ]}>
    {!disable ? (
      <View style={styles.buttonWrapper}>
        {plusButton && (
          <Feather
            name="plus-square"
            size={15}
            color={primaryButton ? textColor : VIOLET100}
          />
        )}

        <Title3 style={{color: primaryButton ? textColor : VIOLET100}}>
          {buttonText}
        </Title3>
      </View>
    ) : (
      <ActivityIndicator style={styles.loader} color={LIGHT100} />
    )}
  </Pressable>
);

export const GoogleButton = ({
  disable = false,
  buttonText = '',
  onPress = () => {},
  style = {},
}): JSX.Element => (
  <Pressable
    disabled={disable}
    onPress={onPress}
    style={[
      styles.fullwidth,
      {backgroundColor: LIGHT100, borderWidth: 1, borderColor: LIGHT60},
      style,
    ]}>
    {!disable ? (
      <View
        style={[
          styles.buttonWrapper,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <FastImage
          source={require('../../../assets/images/third-parties/google.png')}
          style={{width: n(32), height: n(32)}}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Title3 style={{color: DARK50, fontWeight: '500'}}>{buttonText}</Title3>
      </View>
    ) : (
      <ActivityIndicator style={styles.loader} color={LIGHT100} />
    )}
  </Pressable>
);
