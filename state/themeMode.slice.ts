import { Appearance } from 'react-native';
import { createSlice } from '@reduxjs/toolkit';

export enum ThemeModeEnum {
  LIGHT = 'light',
  DARK = 'dark',
  RED = 'red',
}

export const defaultMode = Appearance.getColorScheme() || ThemeModeEnum.LIGHT;

const themeModeSlice = createSlice({
  name: 'themeMode',
  initialState: {
    themeMode: defaultMode as ThemeModeEnum,
  },
  reducers: {
    setThemeMode: (state, action: { payload: ThemeModeEnum }) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setThemeMode } = themeModeSlice.actions;

export default themeModeSlice.reducer;
