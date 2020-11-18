import React, { FC } from 'react';
import { Switch, Picker, AsyncStorage } from 'react-native';

import {
  StyledThemeContainer,
  StyledToggleText,
  StyledPickerWrapper,
  StyledSwitchText,
  StyledSwitchWrapper,
} from './ThemeModeContainer.styles';
import { ThemeModeEnum, setThemeMode } from '../../state/themeMode.slice';
import { getThemeMode } from '../../selectors/getThemeMode';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../utils/useAppDispatch';

export interface CalculatorProps {}

const { LIGHT, DARK, RED } = ThemeModeEnum;

export const ThemeModeContainer: FC<CalculatorProps> = () => {
  const { themeMode } = useSelector(getThemeMode);
  const dispatch = useAppDispatch();

  const handlePickerOnChange = async (value: ThemeModeEnum) => {
    await AsyncStorage.setItem('THEME', value);
    dispatch(setThemeMode(value));
  };

  const handleSwitchOnChange = async (value: ThemeModeEnum) => {
    await AsyncStorage.setItem('THEME', value);
  };

  const ThemePicker = () => (
    <StyledPickerWrapper>
      <StyledSwitchText>Congrats! You found red mode! 🤗</StyledSwitchText>
      <Picker
        style={{ height: 50, width: 150 }}
        selectedValue={themeMode}
        onValueChange={handlePickerOnChange}>
        <Picker.Item label="Light Mode" value={LIGHT} />
        <Picker.Item label="Dark Mode" value={DARK} />
        <Picker.Item label="Red Mode" value={RED} />
      </Picker>
    </StyledPickerWrapper>
  );
  const ThemeSwitch = () => (
    <StyledSwitchWrapper>
      <StyledToggleText>Dark mode</StyledToggleText>
      <Switch
        value={themeMode === DARK}
        onValueChange={(value) => {
          dispatch(setThemeMode(value ? DARK : LIGHT));
          handleSwitchOnChange(themeMode);
        }}
      />
    </StyledSwitchWrapper>
  );

  // const ThemeSelector = () => {};

  return (
    <StyledThemeContainer>
      {themeMode === RED ? <ThemePicker /> : <ThemeSwitch />}
    </StyledThemeContainer>
  );
};
