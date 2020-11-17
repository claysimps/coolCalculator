import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export type NeuDimensionsProps = {
  neuDimensions: [keyof typeof neuDimensions];
};

export const neuDimensions = {
  pressable: {
    size: deviceWidth * 0.18,
  },
  outputDisplay: {
    width: deviceWidth * 0.9,
    height: deviceHeight * 0.25,
  },
} as const;
