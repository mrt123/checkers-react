export function tryMove(pin, fieldTarget, fields, activePlayer, consecutiveMove) {
  const illegalMove = { type: 'illegal', updatedPin: pin };

  if (fieldTarget.pin !== null || fieldTarget.color === 'white' || activePlayer.color !== pin.color) return illegalMove;

  const moveDiffX = fieldTarget.x - pin.x;
  const moveDiffY = fieldTarget.y - pin.y;
  const moveCountX = Math.abs(moveDiffX);

  const updatedPin = { ...pin, x: fieldTarget.x, y: fieldTarget.y };

  if (moveCountX === 1 && moveDiffY === pin.moveDirection * 1 && !consecutiveMove) {
    return { type: 'normal', updatedPin };
  } else if (moveCountX === 2 && moveDiffY === pin.moveDirection * 2) {
    const intermediateX = pin.x + moveDiffX / 2;
    const intermediateY = pin.y + moveDiffY / 2;

    const intermediateField = fields.filter(f => {
      return f.x === intermediateX && f.y === intermediateY;
    })[0];

    if (intermediateField.pin && intermediateField.pin.color !== pin.color) {
      return { type: 'kill', killed: intermediateField.pin, updatedPin };
    } else return illegalMove;
  } else return illegalMove;
}

export function additionalJumpPossible(pin, fields) {
  const target1 = {
    x: pin.x + 2,
    y: pin.y + pin.moveDirection * 2
  };

  const target2 = {
    x: pin.x - 2,
    y: pin.y + pin.moveDirection * 2
  };

  // TODO: shouldn't Fields, and Field be a Class ? [getField(x,y), cleanField(x,y), getPin(x,y)]
  const fieldTarget1 = fields.filter(f => f.x === target1.x && f.y === target1.y)[0];
  const fieldTarget2 = fields.filter(f => f.x === target2.x && f.y === target2.y)[0];

  let move1Result, move2Result;

  if (fieldTarget1 !== undefined) move1Result = tryMove(pin, fieldTarget1, fields, { color: pin.color });
  if (fieldTarget2 !== undefined) move2Result = tryMove(pin, fieldTarget2, fields, { color: pin.color });
  const possibleOutcomes = [move1Result, move2Result].filter(mr => mr !== undefined && mr.type !== 'illegal');

  return possibleOutcomes.length > 0;
}
