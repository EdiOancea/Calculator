import React from 'react';
import Button from './Button';
import styles from 'styled-components';

const Buttons = ({ clear, addDigit, equalityHandler, reverseSign, addComa, setBinaryOperator }) => {
  const Box = styles.div`
    width: 200px;
    height: 250px;
    overflow-y: auto;
  `;

  const buttonFunction = symbol => {
    if (symbol.length === 1 && symbol >= '0' && symbol <= '9') {
      return () => addDigit(symbol);
    } else if ('+-x%÷'.includes(symbol)) {
      return () => setBinaryOperator(symbol);
    }

    switch (symbol) {
      case 'AC':
        return clear;
        break;
      case '+/-':
        return reverseSign;
        break;
      case ',':
        return addComa;
        break;
      case '=':
        return equalityHandler;
        break;
      default:
        return null;
    }
  }

  const config = [
    { text: 'AC', color: 'darkGray', size: 'small' },
    { text: '+/-', color: 'darkGray', size: 'small' },
    { text: '%', color: 'darkGray', size: 'small' },
    { text: '÷', color: 'orange', size: 'small' },
    { text: '7', color: 'gray', size: 'small' },
    { text: '8', color: 'gray', size: 'small' },
    { text: '9', color: 'gray', size: 'small' },
    { text: 'x', color: 'orange', size: 'small' },
    { text: '4', color: 'gray', size: 'small' },
    { text: '5', color: 'gray', size: 'small' },
    { text: '6', color: 'gray', size: 'small' },
    { text: '-', color: 'orange', size: 'small' },
    { text: '1', color: 'gray', size: 'small' },
    { text: '2', color: 'gray', size: 'small' },
    { text: '3', color: 'gray', size: 'small' },
    { text: '+', color: 'orange', size: 'small' },
    { text: '0', color: 'gray', size: 'big' },
    { text: ',', color: 'gray', size: 'small' },
    { text: '=', color: 'orange', size: 'small' },
  ]

  return(
    <Box>{config.map(buttonConfig => {
          return <Button
            text={buttonConfig.text}
            color={buttonConfig.color}
            onClick={buttonFunction(buttonConfig.text)}
            size={buttonConfig.size}
            />;
          })}
    </Box>
  );
};

export default Buttons;
