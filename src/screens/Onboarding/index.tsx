import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Animated, FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import n from '../../_helpers/normalize';
import {FullWidthButton} from '../../components/Button/CustomWidthButton';
import {onboardingData} from '../../constants/data';
import Pagination from './Children/Pagination';
import Slider from './Children/Slider';
import {LOGIN, SIGNUP} from '../../constants/strings';

const OnBoardingScreen = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation: any = useNavigation();
  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={onboardingData}
        renderItem={({item}) => <Slider item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={onboardingData} scrollX={scrollX} index={index} />
      <View style={styles.buttonContainer}>
        <FullWidthButton
          buttonText={SIGNUP}
          onPress={() => navigation.navigate('SignUpScreen')}
        />
        <FullWidthButton
          buttonText={LOGIN}
          primaryButton={false}
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-end', marginVertical: n(30)},
  buttonContainer: {paddingHorizontal: n(20), gap: n(16)},
});
