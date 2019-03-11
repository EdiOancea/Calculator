import React from 'react';
import styles from 'styled-components';

const Display = ({ text }) => {
  const Box = styles.div`
    width: 200px;
    height: 75px;
    overflow-y: auto;
    background-color: #2A2B2F;
    color: #E7E7E8;
    text-align: right;
  `;

  const Paragraph = styles.p`
    margin: 25px 15px 7px 15px;
    font-size: 40px;
  `;

  return(
    <Box>
      <Paragraph>{text}</Paragraph>
    </Box>
  );
}

export default Display;
