import React from 'react';
import { Provider } from 'react-redux';

import { ThemeManager } from './components/ThemeManager';
import { NeuButton } from './components/NeuButton';
import { store } from './state';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeManager>
        <NeuButton value={1} onPress={() => {}} text="1" />
      </ThemeManager>
    </Provider>
  );
};
