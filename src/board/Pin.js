import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const Pin = styled.div`
  z-index: 202;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  background-color: ${p => p.color};
  visibility: ${p => p.visibility};
  border: 5px solid black;
`;

export default ({ pin }) => {
  const dispatch = useDispatch();
  const activePin = useSelector(state => state.board.activePin);
  const setActivePin = () => dispatch({ type: 'SET_ACTIVE_PIN', pin: pin });
  const [visibility, setVisibility] = useState('visible');

  const onDragStart = () => {
    if (activePin !== pin) {
      setActivePin(pin);
    }
    setTimeout(() => {
      setVisibility('hidden'); // hides original element but leaves dragged
    });
  };

  const onDragEnd = () => {
    setVisibility('visible');
  };

  return (
    <Pin
      color={pin.color}
      visibility={visibility}
      draggable="true"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    ></Pin>
  );
};
