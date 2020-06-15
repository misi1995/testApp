/**
 * [描述] 设备尺寸相关util
 * [日期] 2018-04-01
 * [作者] sun
 */
import {Dimensions, PixelRatio} from 'react-native';

export default {
  width: Dimensions.get('window').width, // iphone6 375
  height: Dimensions.get('window').height,
  onePixel: 1 / PixelRatio.get(),
  pixelRatio: PixelRatio.get(),
  pageHeader: 50,
};
