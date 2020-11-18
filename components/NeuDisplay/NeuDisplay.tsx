import React, { FC } from 'react';

import { StyledNeuDisplayWrapper, StyledNeuDisplay } from './NeuDisplay.styles';
import { NeuDisplayProps } from './NeuDisplay.types';

export const NeuDisplay: FC<NeuDisplayProps> = ({
  border = false,
  textColor,
  text,
}) => (
  <StyledNeuDisplayWrapper>
    <StyledNeuDisplay border={border} textColor={textColor}>
      {text}
    </StyledNeuDisplay>
  </StyledNeuDisplayWrapper>
);
