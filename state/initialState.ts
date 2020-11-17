export type InitialState = {
  [key: string]: any;
};

export const initialState = {
  displayValue: '0',
  currentOperator: '',
  bufferValue: 0,
  startNext: true,
  previousOperator: '',
};
