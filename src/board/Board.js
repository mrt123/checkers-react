import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Field from './Field.js';
import Pin from './Pin.js';
import BoardBox from './BoardBox';
import { getFields } from '../gameApi/fieldsApi.js';
import { populatePins } from '../gameApi/boardApi.js';

export default ({ x }) => {
  const counter = useSelector(state => state.testState);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const fields = getFields();
  const pins = populatePins(fields);

  const fieldsEls = fields.map((f, i) => <Field key={i} def={f} />);
  const pinsEls = pins.map((p, i) => <Pin key={i} def={p} />);

  const movePin = () =>
    dispatch({ type: 'MOVE_PIN', pinId: '1', targetId: '1' });

  return (
    <BoardBox>
      {fieldsEls}
      {pinsEls}
      <div>
        <p>Counter: {counter} </p>
        <button onClick={movePin}>Move Pin</button>

        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </BoardBox>
  );
};
