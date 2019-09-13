import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Field from './Field.js';
import BoardBox from './BoardBox';

export default ({ x }) => {
  const fields = useSelector(state => state.board.fields);
  const fieldsEls = fields.map((f, i) => <Field key={i} f={f} />);

  return <BoardBox>{fieldsEls}</BoardBox>;
};
