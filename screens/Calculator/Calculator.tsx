import React, { FC } from 'react';

import { StyledCalculatorContainer } from './Calculator.styles';

import { KeypadContainer } from '../../containers/KeypadContainer';
import { OutputDisplayContainer } from '../../containers/OutputDisplayContainer';
import { ThemeModeContainer } from '../../containers/ThemeModeContainer';

export interface CalculatorProps {}

export const CalculatorScreen: FC<CalculatorProps> = () => {
  return (
    <StyledCalculatorContainer>
      <ThemeModeContainer />
      <OutputDisplayContainer />
      <KeypadContainer />
    </StyledCalculatorContainer>
  );
};
