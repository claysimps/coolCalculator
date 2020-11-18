import { Animated } from 'react-native';

import { Neomorph } from 'react-native-neomorph-shadows';
import styled from 'styled-components/native';

import { neuDepth, NeuDepthProps } from '../../constants/neuDepth';
import { NeuThemeProps } from '../../constants/themes/themes.types';
import { TypographyProps, typography } from '../../constants/typography';
import { light } from '../../constants/themes';
import { StyledBaseText } from '../Text';
import { neuDimensions } from '../../constants/neuDimensions';

export interface StyledNeuTextProps
  extends NeuDepthProps,
    NeuThemeProps,
    TypographyProps {
  border?: boolean;
  textColor?: keyof typeof light.theme.fontColor;
}
export interface StyledNeuDisplayProps
  extends NeuDepthProps,
    NeuThemeProps,
    TypographyProps {
  borderColor?: keyof typeof light.theme.palette;
}

const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);
const displaySize = neuDimensions.outputDisplay.width;

export const StyledNeuDisplayWrapper = styled(AnimatedNeomorph)<
  StyledNeuDisplayProps
>`
  justify-content: center;
  align-items: flex-end;
  border-radius: 35px;
  width: ${displaySize}px;
  height: 80px;
  background: ${(props) => props.theme.palette.canvas};
  shadow-radius: ${(props) => neuDepth[props.depth || 'normal']};
  border: 0.3px solid
    ${(props) => props.theme.palette[props.borderColor || 'borderColor']};
`;

export const StyledNeuDisplay = styled(StyledBaseText)<StyledNeuTextProps>`
  margin-right: 30px;
  font-family: ${typography.fontFamily.secondary};
  font-weight: ${(props) =>
    typography.fontWeight[props.fontWeight || 'regular']};
  font-size: 40px;
  color: ${(props) => props.theme.fontColor[props.textColor || 'primary']};
`;
