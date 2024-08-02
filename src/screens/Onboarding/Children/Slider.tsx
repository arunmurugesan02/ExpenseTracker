import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import n, {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../_helpers/normalize';
import {Regular1, Title1} from '../../../constants/TypoGraphy';
interface Item {
  img: any;
  title: string;
  desc: string;
}

interface Props {
  item: Item;
}

const Slider: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.container} key={item?.title}>
      <FastImage
        source={item?.img}
        style={styles.img}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View>
        <Title1 style={styles.titleText} numberOfLines={5}>
          {item?.title}
        </Title1>
        <Regular1 style={styles.descText} numberOfLines={5}>
          {item?.desc}
        </Regular1>
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    height: SCREEN_HEIGHT * 0.8,
    justifyContent: 'center',
  },
  img: {
    width: n(300),
    height: n(214),
    padding: n(30),
  },
  titleText: {
    paddingTop: n(41),
    marginHorizontal: n(47),
    fontWeight: '700',
    textAlign: 'center',
  },
  descText: {
    paddingTop: n(16),
    marginHorizontal: n(47),
    color: '#91919F',
    textAlign: 'center',
    fontWeight: '500',
  },
});
