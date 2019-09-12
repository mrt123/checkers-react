import React from 'react';
import styled from 'styled-components';

const FieldBox = styled.div`
  position: absolute;
  z-index: 200;
  left: ${p => p.x * 60}px;
  top: ${p => p.y * 60}px;
  width: 60px;
  height: 60px;
  background-color: ${p => p.color};
  color: red;
  font-size: 9px;
`;

export default ({ def }) => {
  return (
    <FieldBox {...def}>
      {def.y} : {def.x}
    </FieldBox>
  );
};
