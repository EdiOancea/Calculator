import React from 'react';
import styled from 'styled-components';

const Button = ({ text, onClick, color = 'gray', size = 'small' }) => {
  const colors = {
    gray: '#5D5B5E',
    orange: '#FE930F',
    darkGray: '#3C3C3E',
  };

  const Buton = styled.button`
    &:active {
      opacity: 0.6;
    }
    background-color: ${colors[color]}; 
    color: #E7E7E8;
    width: ${size === 'small' ? '50px' : '100px'};
    height: 40px;
    border: 1px solid black;
    padding: 0px 10px;
    text-align: ${size === 'small' ? 'center' : 'left'};
    font-size: 25px;
    display: inline-block;
  `;
  
  return(
    <Buton onClick={onClick}>{text}</Buton>
  );
};

export default Button;