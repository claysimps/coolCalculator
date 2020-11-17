import { createSelector } from 'reselect';
import { RootState } from '../state';

export const getThemeMode = createSelector(
  (state: RootState) => state,
  (state) => state.themeMode,
);
