import { SET_ACTIVE_PIN, SET_DROP_FIELD, UNSET_DROP_FIELD, TRY_MOVE_PIN } from '../board/boardActions.js';
import { getFields } from '../../gameApi/fieldsApi.js';
import { tryMove } from '../../gameApi/boardApi.js';

const board = (
  state = {
    activePin: null,
    fields: getFields()
  },
  action
) => {
  switch (action.type) {
    case SET_ACTIVE_PIN: {
      return {
        ...state,
        activePin: action.pin
      };
    }
    case SET_DROP_FIELD: {
      const moveResult = tryMove(state.activePin, action.f, state.fields);

      if (moveResult.type === 'illegal') return state;
      else {
        return {
          ...state,
          fields: highlightOneField(state.fields, action.f, true)
        };
      }
    }
    case UNSET_DROP_FIELD: {
      return {
        ...state,
        fields: highlightOneField(state.fields, action.f, false)
      };
    }
    case TRY_MOVE_PIN: {
      const targetField = action.f;
      const pin = state.activePin;
      const moveResult = tryMove(pin, targetField, state.fields);

      if (moveResult.type === 'illegal') return state;
      else {
        return {
          ...state,
          fields: state.fields.map(f => {
            if (moveResult.killed === f.pin) return { ...f, pin: null };

            if (f.x === pin.x && f.y === pin.y) return { ...f, pin: null };
            else if (f === targetField) {
              const updatedPin = { ...pin, x: f.x, y: f.y };
              return { ...f, pin: updatedPin };
            }
            return f;
          })
        };
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

export default board;
