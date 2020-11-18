import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
  StyledThemeContainer,
  StyledKeyboardAvoidingView,
} from './ThemeContainer.styles';
import { ThemeContainerProps } from './ThemeContainer.types';

export const ThemeContainer = ({ children, center }: ThemeContainerProps) => {
  return (
    <>
      <StyledKeyboardAvoidingView behavior="padding" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <StyledThemeContainer center={center}>
            {children}
          </StyledThemeContainer>
        </TouchableWithoutFeedback>
      </StyledKeyboardAvoidingView>
    </>
  );
};
