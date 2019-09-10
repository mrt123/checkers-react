export const MOVE_PIN = 'MOVE_PIN';

export function movePin(pinId, targetId) {
  return {
    type: MOVE_PIN,
    pinId,
    targetId
  };
}
