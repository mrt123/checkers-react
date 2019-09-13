export function tryMove(pin, fieldTarget, fields) {
  if (fieldTarget.pin !== null || fieldTarget.color === 'white') return { type: 'illegal' };

  const pinX = pin.x;
  const pinY = pin.y;

  const moveCountX = Math.abs(fieldTarget.x - pinX);
  const moveCountY = fieldTarget.y - pinY;

  if (moveCountX === 1 && moveCountY === pin.moveDirection * 1) return { type: 'normal' };
  else if (moveCountX === 2 && moveCountY === pin.moveDirection * 2) {
    const intermediateX = pinX + (fieldTarget.x - pinX) / 2;
    const intermediateY = pinY + (fieldTarget.y - pinY) / 2;

    const intermediateField = fields.filter(f => {
      return f.x === intermediateX && f.y === intermediateY;
    })[0];

    if (intermediateField.pin && intermediateField.pin.color !== pin.color) {
      return { type: 'kill', killed: intermediateField.pin };
    } else return { type: 'illegal' };
  } else return { type: 'illegal' };
  //TODO: other cases
}
