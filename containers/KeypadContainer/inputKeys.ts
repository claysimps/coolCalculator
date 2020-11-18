// typeof operandInputKeys[keyof typeof operandInputKeys];
export type OperandInputDetailsProps = {
  [key: string]: typeof inputKeys[keyof typeof inputKeys];
};

export const inputKeys = {
  minus: {
    value: '+/-',
    text: '+/-',
    type: 'function',
    double: false,
  },
  percent: {
    value: '%',
    text: '%',
    type: 'function',
    double: false,
  },
  divide: {
    value: '/',
    text: '÷',
    type: 'operator',
    double: false,
  },
  seven: {
    value: 7,
    text: '7',
    type: 'operand',
    double: false,
  },
  eight: {
    value: 8,
    text: '8',
    type: 'operand',
    double: false,
  },
  nine: {
    value: 9,
    text: '9',
    type: 'operand',
    double: false,
  },
  times: {
    value: '*',
    text: 'X',
    type: 'operator',
    double: false,
  },
  four: {
    value: 4,
    text: '4',
    type: 'operand',
    double: false,
  },
  five: {
    value: 5,
    text: '5',
    type: 'operand',
    double: false,
  },
  six: {
    value: 6,
    text: '6',
    type: 'operand',
    double: false,
  },
  subtract: {
    value: '-',
    text: '−',
    type: 'operator',
    double: false,
  },
  one: {
    value: 1,
    text: '1',
    type: 'operand',
    double: false,
  },
  two: {
    value: 2,
    text: '2',
    type: 'operand',
    double: false,
  },
  three: {
    value: 3,
    text: '3',
    type: 'operand',
    double: false,
  },
  plus: {
    value: '+',
    text: '+',
    type: 'operator',
    double: false,
  },
  zero: {
    value: 0,
    text: '0',
    type: 'operand',
    double: true,
  },
  point: {
    value: '.',
    text: '.',
    type: 'operand',
    double: false,
  },
  equals: {
    value: '=',
    text: '=',
    type: 'operator',
    double: false,
  },
};

export const inputDetails: Array<keyof typeof inputKeys> = [
  'minus',
  'percent',
  'divide',
  'seven',
  'eight',
  'nine',
  'times',
  'four',
  'five',
  'six',
  'subtract',
  'one',
  'two',
  'three',
  'plus',
  'zero',
  'point',
  'equals',
];
