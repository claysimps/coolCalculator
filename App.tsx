import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NeuButton} from './components/NeuButton';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NeuButton />
      </SafeAreaView>
    </>
  );
};

export default App;
