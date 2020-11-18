import React from 'react';
import { Provider } from 'react-redux';
import { ThemeManager } from './components/ThemeManager';
import { store } from './state';
import { CalculatorScreen } from './screens/Calculator/Calculator';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeManager>
        <CalculatorScreen />
      </ThemeManager>
    </Provider>
  );
};
