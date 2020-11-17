import React, { useCallback, useState } from 'react';
import {
  StyledPressable,
  StyledNeuButtonWrapper,
  StyledButtonText,
} from './NeuButton.styles';
import { NeuButtonProps } from './NeuButton.types';

export const NeuButton: React.FC<NeuButtonProps> = ({
  text,
  onPress,
  double = false,
  ...props
}) => {
  const [isActive, setActive] = useState(false);
  const handlePressIn = useCallback(() => {
    setActive(true);
  }, [setActive]);
  const handlePressOut = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <>
      <StyledPressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        {...props}>
        <StyledNeuButtonWrapper double={double} isActive={isActive}>
          <StyledButtonText double={double}>{text}</StyledButtonText>
        </StyledNeuButtonWrapper>
      </StyledPressable>
    </>
  );
};
