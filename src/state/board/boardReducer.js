import { SET_ACTIVE_PIN, SET_HIGHLIGHT_FIELD, UNSET_HIGHLIGHT_FIELD, TRY_MOVE_PIN } from '../board/boardActions.js';
import { generateFields } from '../../gameApi/fieldsApi.js';
import { tryMove, additionalJumpPossible } from '../../gameApi/boardApi.js';

const board = (
  state = {
    activePlayer: {
      color: 'orange'
    },
    activePin: null,
    blockActivePin: false,
    fields: generateFields()
  },
  action
) => {
  switch (action.type) {
    case SET_ACTIVE_PIN: {
      if (state.blockActivePin) return state;
      else
        return {
          ...state,
          activePin: action.pin
        };
    }
    case SET_HIGHLIGHT_FIELD: {
      const moveResult = tryMove(state.activePin, action.f, state.fields, state.activePlayer);

      if (moveResult.type === 'illegal') return state;
      else {
        return {
          ...state,
          fields: highlightOneField(state.fields, action.f, true)
        };
      }
    }
    case UNSET_HIGHLIGHT_FIELD: {
      return {
        ...state,
        fields: highlightOneField(state.fields, action.f, false)
      };
    }
    case TRY_MOVE_PIN: {
      const targetField = action.f;
      const pin = state.activePin;
      const moveResult = tryMove(pin, targetField, state.fields, state.activePlayer);

      if (moveResult.type === 'illegal') return state;
      else {
        // todo: move newFields gen to tryMove() as updatedFields
        const newFields = state.fields.map(f => {
          if (moveResult.killed === f.pin) return { ...f, pin: null };

          if (f.x === pin.x && f.y === pin.y) return { ...f, pin: null };
          else if (f === targetField) {
            return { ...f, pin: moveResult.updatedPin };
          }
          return f;
        });

        const statePart = {
          ...state,
          fields: newFields,
          activePin: moveResult.updatedPin
        };

        const activePlayer = state.activePlayer;
        const otherPlayer = getOtherPlayer(activePlayer);

        if (moveResult.type === 'kill') {
          const isAdditionalJumpPossible = additionalJumpPossible(moveResult.updatedPin, newFields);

          return {
            ...statePart,
            blockActivePin: isAdditionalJumpPossible,
            activePlayer: isAdditionalJumpPossible ? activePlayer : otherPlayer
          };
        } else {
          return {
            ...statePart,
            blockActivePin: false,
            activePlayer: otherPlayer
          };
        }
      }
    }
    default: {
      return state;
    }
  }
};

function highlightOneField(fields, targetField, hlValue) {
  return fields.map(f => {
    const fieldMatch = f.x === targetField.x && f.y === targetField.y;
    return fieldMatch ? { ...f, highlight: hlValue } : f;
  });
}

function getNextPlayerAfterKill(updatedPin, fields) {
  const activePlayer = { color: updatedPin.color };
  return additionalJumpPossible(updatedPin, fields) ? activePlayer : getOtherPlayer(activePlayer);
}

function getOtherPlayer(player) {
  return {
    color: player.color === 'orange' ? 'white' : 'orange'
  };
}

export default board;
