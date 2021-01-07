import { HYDRATE } from 'next-redux-wrapper';
import { State, Actions, actionTypes } from '../interfaces';

export const initialState: State = {
  error: null,
  placeholderData: [],
};

interface HydratePayload {
  reducer: State;
}

const rootReducer = (
  state = initialState,
  action: Actions | { type: typeof HYDRATE; payload: HydratePayload },
): State => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.reducer };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    default:
      return state;
  }
};

export default rootReducer;
