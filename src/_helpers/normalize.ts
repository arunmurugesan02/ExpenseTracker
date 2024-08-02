import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const FIGMA_MOBILE_WIDTH = 375;
const FIGMA_MOBILE_HEIGHT = 812;

const wscale: number = SCREEN_WIDTH / FIGMA_MOBILE_WIDTH;
const hscale: number = SCREEN_HEIGHT / FIGMA_MOBILE_HEIGHT;

const n = (size: number, landscape = false) => {
  const newSize = landscape ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export default n;
export {SCREEN_WIDTH, SCREEN_HEIGHT};
