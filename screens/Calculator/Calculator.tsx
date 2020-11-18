import React, { FC } from 'react';

import { StyledCalculatorContainer } from './Calculator.styles';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import { KeypadContainer } from '../../containers/KeypadContainer';
import { getCalculatorAction } from '../../selectors/getCalculatorAction';

export interface CalculatorProps {}

export const CalculatorScreen: FC<CalculatorProps> = () => {
  const { displayValue } = useSelector(getCalculatorAction);

  return (
    <StyledCalculatorContainer>
      <Text>{displayValue}</Text>
      <KeypadContainer />
    </StyledCalculatorContainer>
  );
};
