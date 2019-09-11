export function getFields() {
  const fields = Array.apply(null, { length: 64 }).map((arg1, i) => {
    const y = Math.floor(i / 8);
    const x = i - 8 * y;
    return { x, y, color: getFieldColor(x, y) };
  });
  return fields;
}

function getFieldColor(x, y) {
  return (x + y) % 2 === 0 ? 'white' : 'black';
}
