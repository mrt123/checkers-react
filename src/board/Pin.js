import React from 'react';
import styled from 'styled-components';

const pinRadius = 50;
const fieldSize = 60;
const pinMargin = (fieldSize - pinRadius) / 2;

const Pin = styled.div`
  position: absolute;
  z-index: 201;
  left: ${p => p.x * fieldSize + pinMargin}px;
  top: ${p => p.y * fieldSize + pinMargin}px;

  border-radius: 25px;
  width: ${pinRadius}px;
  height: ${pinRadius}px;

  background-color: ${p => p.color};
`;

export default ({ def }) => {
  return <Pin {...def}></Pin>;
};
