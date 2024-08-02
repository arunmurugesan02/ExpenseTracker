import React from 'react';
import {Text} from 'react-native';
import {DARK75} from './colors';
import {
  LINEHEIGHT12,
  LINEHEIGHT16,
  LINEHEIGHT18,
  LINEHEIGHT19,
  LINEHEIGHT22,
  LINEHEIGHT34,
  LINEHEIGHT80,
  TEXT12,
  TEXT13,
  TEXT14,
  TEXT16,
  TEXT18,
  TEXT24,
  TEXT32,
  TEXT36,
  TEXT64,
} from './size';

export const TitleX = ({style = {}, children, ...props}): JSX.Element => (
  <Text
    style={[{fontSize: TEXT64, color: DARK75, lineHeight: LINEHEIGHT80}, style]}
    {...props}>
    {children}
  </Text>
);

export const Text36 = ({style = {}, children, ...props}): JSX.Element => (
  <Text
    style={[{fontSize: TEXT36, color: DARK75}, style]}
    {...props}>
    {children}
  </Text>
);

export const Title1 = ({style = {}, children, ...props}): JSX.Element => (
  <Text
    style={[{fontSize: TEXT32, color: DARK75, lineHeight: LINEHEIGHT34}, style]}
    {...props}>
    {children}
  </Text>
);

export const Title2 = ({style = {}, children, ...props}): JSX.Element => (
  <Text
    style={[{fontSize: TEXT24, color: DARK75,}, style]}
    {...props}>
    {children}
  </Text>
);
export const Title3 = ({style = {}, children, ...props}): JSX.Element => (
  <Text
    style={[{fontSize: TEXT18, color: DARK75,}, style]}
    {...props}>
    {children}
  </Text>
);

export const Regular1 = ({style = {}, children, ...props}): JSX.Element => (
  <Text
    style={[{fontSize: TEXT16, color: DARK75,}, style]}
    {...props}>
    {children}
  </Text>
);

export const Regular3 = ({style = {}, children, ...props}): JSX.Element => (
  <Text
    style={[{fontSize: TEXT14, color: DARK75, lineHeight: LINEHEIGHT18}, style]}
    {...props}>
    {children}
  </Text>
);

export const Small = ({style = {}, children, ...props}): JSX.Element => (
  <Text
    style={[{fontSize: TEXT13, color: DARK75, lineHeight: LINEHEIGHT16}, style]}
    {...props}>
    {children}
  </Text>
);

export const Tiny = ({style = {}, children, ...props}): JSX.Element => (
  <Text
    style={[{fontSize: TEXT12, color: DARK75, lineHeight: LINEHEIGHT12}, style]}
    {...props}>
    {children}
  </Text>
);
