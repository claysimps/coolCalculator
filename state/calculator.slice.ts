import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
interface CalculatorDisplayProps {
  [key: string]: any;
}

const calculatorDisplaySlice = createSlice({
  name: 'calculatorDisplay',
  initialState,
  reducers: {
    startDisplay: (state, { payload }: { payload: CalculatorDisplayProps }) => {
      const { displayValue } = payload;
      state.displayValue = displayValue.toString();
      state.startNext = false;
    },
    updateDisplay: (
      state,
      { payload }: { payload: CalculatorDisplayProps },
    ) => {
      const { displayValue } = payload;
      state.displayValue =
        state.displayValue === '0'
          ? displayValue.toString()
          : state.displayValue.concat(displayValue);
    },
    clearDisplay: (state, { payload }: { payload: CalculatorDisplayProps }) => {
      const { displayValue } = payload;
      state.displayValue = displayValue;
    },
    clearMemory: (state) => {
      state.displayValue = '0';
      state.bufferValue = 0;
      state.currentOperator = '';
    },

    percentFunction: (state: CalculatorDisplayProps) => {
      state.displayValue = (parseFloat(state.displayValue) / 100).toString();
    },
    minusFunction: (state: CalculatorDisplayProps) => {
      state.displayValue = (parseFloat(state.displayValue) * -1).toString();
    },

    setOperator: (state, { payload }: { payload: CalculatorDisplayProps }) => {
      const { currentOperator } = payload;
      state.previousOperator = currentOperator;
      state.currentOperator = currentOperator === '=' ? '' : currentOperator;
    },

    updateOperations: (
      state: CalculatorDisplayProps,
      { payload }: { payload: CalculatorDisplayProps },
    ) => {
      const { displayValue, bufferValue, currentOperator } = payload;
      state.displayValue = displayValue;
      state.bufferValue = bufferValue;
      state.previousOperator = currentOperator;
      state.startNext = true;
    },
    setBufferValue: (state: CalculatorDisplayProps) => {
      state.bufferValue = parseFloat(state.displayValue);
      state.startNext = true;
    },
  },
});

export const {
  startDisplay,
  updateDisplay,
  clearDisplay,
  clearMemory,
  percentFunction,
  minusFunction,
  setOperator,
  updateOperations,
  setBufferValue,
} = calculatorDisplaySlice.actions;

export default calculatorDisplaySlice.reducer;
