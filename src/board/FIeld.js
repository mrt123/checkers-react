import React from 'react';
import styled from 'styled-components';

const PinBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: ${p => p.color};
  color: red;
  font-size: 9px;
  overflow-wrap: break-word;
  word-break: break-all;
`;

export default ({ def }) => {
  return (
    <PinBox color={def.color}>
      {def.rowNumber} - {def.i}
    </PinBox>
  );
};
