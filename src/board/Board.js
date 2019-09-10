import React from 'react';
import Field from './Field.js';
import styled from 'styled-components';

const BoardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 480px;
  height: 480px;
  background: grey;
`;

export default ({ x }) => {
  const fields = Array.apply(null, { length: 64 }).map((x, i) => {
    const rowNumber = Math.floor(i / 8);
    const evenRow = rowNumber % 2 === 0;
    const evenFieldNumber = i % 2 === 0;

    return {
      i,
      color: getFieldColor(evenFieldNumber, evenRow),
      rowNumber,
      x: evenFieldNumber
    };
  });

  const pinEls = fields.map(p => <Field key={p.i} def={p}></Field>);

  return <BoardBox>{pinEls}</BoardBox>;
};

function getFieldColor(evenFieldNumber, evenRow) {
  const shouldBeWhite = evenRow ? evenFieldNumber : !evenFieldNumber;
  return shouldBeWhite ? 'white' : 'black';
}
