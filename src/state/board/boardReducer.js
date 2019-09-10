import { MOVE_PIN } from '../board/boardActions.js';

const board = (state = { lastAction: null }, action) => {
  switch (action.type) {
    case MOVE_PIN: {
      return {
        lastAction: `${action.type},${action.pinId},${action.targetId}}`,
        ...state
      };
    }
    default: {
      return state;
    }
  }
};

export default board;
