import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { ThemeManager } from './components/ThemeManager';
import { NeuButton } from './components/NeuButton';
import { store } from './state';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeManager>
        <SafeAreaView>
          <NeuButton value={1} onPress={() => {}} text="1" />
        </SafeAreaView>
      </ThemeManager>
    </Provider>
  );
};

export default App;
