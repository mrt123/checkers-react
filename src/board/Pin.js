import React, { useState } from 'react';
import styled from 'styled-components';

const pinRadius = 50;
const fieldSize = 60;
const pinMargin = (fieldSize - pinRadius) / 2;

const Pin = styled.div`
  position: absolute;
  z-index: 201;
  left: ${p => p.x + pinMargin}px;
  top: ${p => p.y + pinMargin}px;

  border-radius: 25px;
  width: ${pinRadius}px;
  height: ${pinRadius}px;

  background-color: ${p => p.color};
`;

const Pin2 = styled.div.attrs({
  style: ({ x, y }) => ({
    top: y + pinMargin + 'px',
    left: x + pinMargin + 'px'
  })
})`
  position: absolute;
  z-index: 201;
  border-radius: 25px;
  width: ${pinRadius}px;
  height: ${pinRadius}px;
  background-color: ${p => p.color};
`;

const Pin3 = styled.div.attrs(p => ({
  style: {
    top: p.y + pinMargin + 'px',
    left: p.x + pinMargin + 'px'
  }
}))`
  position: absolute;
  z-index: 201;
  border-radius: 25px;
  width: ${pinRadius}px;
  height: ${pinRadius}px;
  background-color: ${p => p.color};
`;

export default ({ def }) => {
  const boardX = def.x;
  const boardY = def.y;
  const pixelX = fieldSize * boardX;
  const pixelY = fieldSize * boardY;

  const [pixelPosition, setPixelPosition] = useState({ x: pixelX, y: pixelY });
  const [dragStartPosition, setDragStartPosition] = useState({ x: 0, y: 0 });

  const onDrag = e => {
    const dragDiff = {
      x: e.clientX === 0 ? 0 : e.clientX - dragStartPosition.x,
      y: e.clientY === 0 ? 0 : e.clientY - dragStartPosition.y
    };
    setPixelPosition({
      x: pixelX + dragDiff.x,
      y: pixelY + dragDiff.y
    });
  };

  const onDragStart = e => setDragStartPosition({ x: e.clientX, y: e.clientY });

  return (
    <Pin3
      x={pixelPosition.x}
      y={pixelPosition.y}
      color={def.color}
      draggable="true"
      onDrag={onDrag}
      onDragStart={onDragStart}
    >
      {dragStartPosition.x}
    </Pin3>
  );
};
