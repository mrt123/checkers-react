import React from 'react';
import styled from 'styled-components';
import Pin from './Pin.js';
import { useDispatch } from 'react-redux';

const FieldBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: ${p => p.color};
  color: red;
  font-size: 9px;
  background-image: url("${p => p.img}");
  ${p => (p.highlight ? 'border: 4px dotted yellow' : 'border: none')};
`;

export default ({ f }) => {
  const dispatch = useDispatch();
  const setDropField = x => dispatch({ type: 'SET_DROP_FIELD', f: x });
  const unsetDropField = x => dispatch({ type: 'UNSET_DROP_FIELD', f: x });
  const tryMove = () => dispatch({ type: 'TRY_MOVE_PIN', f });

  const img = f.color === 'white' ? 'white.jpg' : 'black.jpg';
  const pinEL = f.pin === null ? null : <Pin pin={f.pin} />;

  const onDrop = () => {
    tryMove(f);
    unsetDropField(f);
  };

  const eventProps = {
    onDragEnter: e => setDropField(f),
    onDragLeave: e => unsetDropField(f),
    onDragOver: e => e.preventDefault(), // required for onDrop to work!
    onDrop
  };

  return (
    <FieldBox img={img} color={f.color} highlight={f.highlight} {...eventProps}>
      {pinEL}
    </FieldBox>
  );
};
