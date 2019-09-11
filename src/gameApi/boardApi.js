export function populatePins(fields) {
  const pins = fields.map(f => {
    if (f.y <= 2 && f.color === 'black') return createPin(f.x, f.y, 'orange');
    if (f.y >= 5 && f.color === 'black') return createPin(f.x, f.y, 'white');
    else return null;
  });

  return pins.filter(x => x !== null);
}

function createPin(x, y, color) {
  return { x, y, color };
}
