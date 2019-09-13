export function tryMove(pin, fieldTarget, fields, activePlayer, consecutiveMove) {
  const illegalMove = { type: 'illegal', updatedPin: pin };

  if (fieldTarget.pin !== null || fieldTarget.color === 'white' || activePlayer.color !== pin.color) return illegalMove;

  const pinX = pin.x;
  const pinY = pin.y;

  const moveCountX = Math.abs(fieldTarget.x - pinX);
  const moveCountY = fieldTarget.y - pinY;
  const updatedPin = { ...pin, x: fieldTarget.x, y: fieldTarget.y };

  if (moveCountX === 1 && moveCountY === pin.moveDirection * 1 && !consecutiveMove) {
    return { type: 'normal', updatedPin };
  } else if (moveCountX === 2 && moveCountY === pin.moveDirection * 2) {
    const intermediateX = pinX + (fieldTarget.x - pinX) / 2;
    const intermediateY = pinY + (fieldTarget.y - pinY) / 2;

    const intermediateField = fields.filter(f => {
      return f.x === intermediateX && f.y === intermediateY;
    })[0];

    if (intermediateField.pin && intermediateField.pin.color !== pin.color) {
      return { type: 'kill', killed: intermediateField.pin, updatedPin };
    } else return illegalMove;
  } else return illegalMove;
}

// must try two fields diagonally forward
export function additionalJumpPossible(pin, fields) {
  // must try with last active pin

  const target1 = {
    x: pin.x + 2,
    y: pin.y + pin.moveDirection * 2
  };

  const target2 = {
    x: pin.x - 2,
    y: pin.y + pin.moveDirection * 2
  };

  const fieldTarget1 = fields.filter(f => f.x === target1.x && f.y === target1.y)[0];
  const fieldTarget2 = fields.filter(f => f.x === target2.x && f.y === target2.y)[0];

  console.log({ fieldTarget2 });

  let move1Result, move2Result;

  if (fieldTarget1 !== undefined) move1Result = tryMove(pin, fieldTarget1, fields, { color: pin.color });
  if (fieldTarget2 !== undefined) move2Result = tryMove(pin, fieldTarget2, fields, { color: pin.color });
  const possibleOutcomes = [move1Result, move2Result].filter(mr => mr !== undefined && mr.type !== 'illegal');
  console.log({ possibleOutcomes });
  return possibleOutcomes.length > 0;
}
