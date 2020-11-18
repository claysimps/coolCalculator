import { StyledNeuDisplayProps, StyledNeuTextProps } from './NeuDisplay.styles';
import { TextInputProps } from 'react-native';

export interface NeuDisplayProps
  extends StyledNeuDisplayProps,
    TextInputProps,
    StyledNeuTextProps {
  text: string;
}
