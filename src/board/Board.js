import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Field from './Field.js';
import BoardBox from './BoardBox';
import { getFields } from '../gameApi/fieldsApi.js';

export default ({ x }) => {
  const counter = useSelector(state => state.testState);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const fields = getFields();

  const fieldsEls = fields.map(p => <Field key={p.i} def={p}></Field>);
  const movePin = () =>
    dispatch({ type: 'MOVE_PIN', pinId: '1', targetId: '1' });

  return (
    <BoardBox>
      {fieldsEls}
      <div>
        <p>Counter: {counter} </p>
        <button onClick={movePin}>Move Pin</button>

        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </BoardBox>
  );
};
