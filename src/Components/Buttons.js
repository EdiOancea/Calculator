import React from 'react';
import Button from './Button';
import styles from 'styled-components';

const Buttons = ({ clear, addDigit }) => {
  const Box = styles.div`
    width: 200px;
    height: 250px;
    overflow-y: auto;
  `;
  
  return(
    <Box>
      <Button text={'AC'} color={'darkGray'} onClick={clear}/>
      <Button text={'+/-'} color={'darkGray'}/>
      <Button text={'%'} color={'darkGray'}/>
      <Button text={'÷'} color={'orange'}/>
      <Button text={'7'} onClick={() => addDigit('7')}/>
      <Button text={'8'} onClick={() => addDigit('8')}/>
      <Button text={'9'} onClick={() => addDigit('9')}/>
      <Button text={'x'} color={'orange'}/>
      <Button text={'4'} onClick={() => addDigit('4')}/>
      <Button text={'5'} onClick={() => addDigit('5')}/>
      <Button text={'6'} onClick={() => addDigit('6')}/>
      <Button text={'-'} color={'orange'}/>
      <Button text={'1'} onClick={() => addDigit('1')}/>
      <Button text={'2'} onClick={() => addDigit('2')}/>
      <Button text={'3'} onClick={() => addDigit('3')}/>
      <Button text={'+'} color={'orange'}/>
      <Button text={'0'} size={'big'} onClick={() => addDigit('0')}/>
      <Button text={','}/>
      <Button text={'='} color={'orange'}/>
    </Box>
  );
};

export default Buttons;