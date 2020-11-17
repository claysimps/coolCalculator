import { Animated, Pressable } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import styled, { css } from 'styled-components/native';

import { neuDepth, NeuDepthProps } from '../../constants/neuDepth';
import { NeuThemeProps } from '../../constants/themes/themes.types';
import { light, dark, red } from '../../constants/themes';
import { StyledBaseText } from '../Text';
import { neuDimensions } from '../../constants/neuDimensions';

export interface StyledNeuButtonProps extends NeuDepthProps, NeuThemeProps {
  fill?: boolean;
  textColor?:
    | keyof typeof light.theme.fontColor
    | keyof typeof dark.theme.fontColor
    | keyof typeof red.theme.fontColor;
  borderColor?:
    | keyof typeof light.theme.palette
    | keyof typeof dark.theme.palette
    | keyof typeof red.theme.palette;
  isActive?: boolean;
  double?: boolean;
}

const borderRadius = neuDimensions.pressable.size * 2;
const doubleButton = neuDimensions.pressable.size * 2 + 20;
const buttonSize = neuDimensions.pressable.size;
const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);

export const StyledPressable = styled(Pressable)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const buttonColor = css<StyledNeuButtonProps>`
  background: ${(props) => props.theme.palette.primary};
`;

const pressState = css<StyledNeuButtonProps>`
  shadow-radius: ${neuDepth.shallow};
`;

const doubleWidth = css<StyledNeuButtonProps>`
  width: ${doubleButton}px;
  color: ${(props) => props.theme.fontColor.secondary};
  background: ${(props) => props.theme.palette.canvasAlt};
`;

const textForDouble = css<StyledNeuButtonProps>`
  color: ${(props) => props.theme.fontColor.tertiary};
`;

export const StyledNeuButtonWrapper = styled(AnimatedNeomorph)<
  StyledNeuButtonProps
>`
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadius}px;
  width: ${buttonSize}px;
  height: ${buttonSize}px;
  background: ${(props) => props.theme.palette.canvas};
  shadow-radius: ${neuDepth.tall};
  ${(props) => props.fill && buttonColor};
  ${(props) => props.isActive && pressState};
  ${(props) => props.double && doubleWidth};
`;
// border: 0.3px solid
//   ${(props) => props.theme.palette[props.borderColor || 'borderColor']};

export const StyledButtonText = styled(StyledBaseText)<StyledNeuButtonProps>`
  font-size: 24px;
  ${(props) => props.double && textForDouble};
`;
