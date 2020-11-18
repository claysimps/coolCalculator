import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getCalculatorAction } from '../../selectors/getCalculatorAction';
import { NeuDisplay } from '../../components/NeuDisplay';
import { StyledOutputDisplayContainer } from './OutputDisplayContainer.styles';
import { AsyncStorage } from 'react-native';
import { ThemeModeEnum, setThemeMode } from '../../state/themeMode.slice';
import { useAppDispatch } from '../../utils/useAppDispatch';

const { RED } = ThemeModeEnum;

export const OutputDisplayContainer = () => {
  const { displayValue } = useSelector(getCalculatorAction);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const setRedTheme = async () => {
      if (displayValue === '58008') {
        await AsyncStorage.setItem('THEME', RED);
        dispatch(setThemeMode(RED));
      }
    };
    setRedTheme();
  }, [dispatch, displayValue]);

  return (
    <StyledOutputDisplayContainer>
      <NeuDisplay
        textColor="secondary"
        text={parseFloat(displayValue).toLocaleString()}
      />
    </StyledOutputDisplayContainer>
  );
};
