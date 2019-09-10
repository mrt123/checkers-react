export function getFields() {
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

  return fields;
}

function getFieldColor(evenFieldNumber, evenRow) {
  const shouldBeWhite = evenRow ? evenFieldNumber : !evenFieldNumber;
  return shouldBeWhite ? 'white' : 'black';
}
