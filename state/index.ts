import { configureStore } from '@reduxjs/toolkit';
import themeModeReducer from './themeMode.slice';
import calculatorReducer from './calculator.slice';

export const store = configureStore({
  reducer: {
    themeMode: themeModeReducer,
    calculator: calculatorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
