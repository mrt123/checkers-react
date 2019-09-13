export function getFields() {
  const fields = Array.apply(null, { length: 64 }).map((arg1, i) => {
    const y = Math.floor(i / 8);
    const x = i - 8 * y;
    const f = { x, y, highlight: false, color: getFieldColor(x, y) };
    return { ...f, pin: getPinForField(f) };
  });
  return fields;
}

function getFieldColor(x, y) {
  return (x + y) % 2 === 0 ? 'white' : 'black';
}

export function getPinForField(f) {
  if (f.y <= 2 && f.color === 'black') return createPin(f.x, f.y, 'orange', 1);
  if (f.y >= 5 && f.color === 'black') return createPin(f.x, f.y, 'white', -1);
  else return null;
}

function createPin(x, y, color, moveDirection) {
  return { x, y, color, moveDirection };
}
