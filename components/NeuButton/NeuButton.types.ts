import { StyledNeuButtonProps } from './NeuButton.styles';
import { GestureResponderEvent } from 'react-native';

export type NeuButtonOnChangeParams = { isActive: boolean; id: string };
export type NeuButtonOnChangeType = (params: NeuButtonOnChangeParams) => void;

export interface NeuButtonProps extends StyledNeuButtonProps {
  value: number | string;
  type?: string;
  text: string;
  double?: boolean;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}
