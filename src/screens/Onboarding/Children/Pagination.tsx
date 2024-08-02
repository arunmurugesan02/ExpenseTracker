import {StyleSheet, Animated, View, Dimensions} from 'react-native';
import {VIOLET100} from '../../../constants/colors';
import n, {SCREEN_WIDTH} from '../../../_helpers/normalize';
import React from 'react';

const Pagination = ({data, scrollX, index}) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [
          (idx - 1) * SCREEN_WIDTH,
          idx * SCREEN_WIDTH,
          (idx + 1) * SCREEN_WIDTH,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 20, 12],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#ccc', VIOLET100, '#ccc'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dot, {width: dotWidth, backgroundColor}]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // bottom: 30,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: n(25),
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: '#ccc',
  },
  dotActive: {
    backgroundColor: VIOLET100,
  },
});
