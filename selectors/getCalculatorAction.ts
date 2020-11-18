import { createSelector } from 'reselect';
import { RootState } from '../state';

export const getCalculatorAction = createSelector(
  (state: RootState) => state,
  (state) => state.calculator,
);
