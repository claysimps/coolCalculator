import React, { FC, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Appearance, AppearanceProvider } from 'react-native-appearance';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ThemeProvider } from 'styled-components/native';
import { dark, light, red } from '../../constants/themes';
import { ThemeModeEnum, setThemeMode } from '../../state/themeMode.slice';
import { useSelector } from 'react-redux';
import { getThemeMode } from '../../selectors/getThemeMode';
import { useAppDispatch } from '../../utils/useAppDispatch';
import { ThemeContainer } from '../ThemeContainer';

const { DARK, LIGHT, RED } = ThemeModeEnum;

export const ThemeManager: FC = ({ children }) => {
  const { themeMode } = useSelector(getThemeMode);
  const dispatch = useAppDispatch();

  const providedTheme = () => {
    if (themeMode === DARK) {
      return dark.theme;
    }
    if (themeMode === LIGHT) {
      return light.theme;
    }
    if (themeMode === RED) {
      return red.theme;
    }
  };

  useEffect(() => {
    const getThemeAsync = async () => {
      const themeResult = await AsyncStorage.getItem('THEME');
      if (themeResult === RED) {
        dispatch(setThemeMode(themeResult));
      }
    };
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (themeMode === LIGHT || DARK) {
        dispatch(setThemeMode(colorScheme as ThemeModeEnum));
      } else {
        dispatch(setThemeMode(RED));
      }
    });
    getThemeAsync();
    return () => subscription.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppearanceProvider>
      <ThemeProvider theme={providedTheme}>
        <>
          <StatusBar
            barStyle={themeMode === DARK ? 'light-content' : 'dark-content'}
          />
          <ThemeContainer>{children}</ThemeContainer>
        </>
      </ThemeProvider>
    </AppearanceProvider>
  );
};
