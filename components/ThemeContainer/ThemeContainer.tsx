import React from 'react';
import { Pressable, Keyboard } from 'react-native';
import {
  StyledThemeContainer,
  StyledKeyboardAvoidingView,
} from './ThemeContainer.styles';
import { ThemeContainerProps } from './ThemeContainer.types';

export const ThemeContainer = ({ children, center }: ThemeContainerProps) => {
  return (
    <>
      <StyledKeyboardAvoidingView behavior="padding" enabled>
        <Pressable onPress={Keyboard.dismiss} accessible={false}>
          <StyledThemeContainer center={center}>
            {children}
          </StyledThemeContainer>
        </Pressable>
      </StyledKeyboardAvoidingView>
    </>
  );
};
