import { HYDRATE } from 'next-redux-wrapper';
import { State, Actions, actionTypes } from '../interfaces';

export const initialState: State = {
  error: null,
  fetchedData: [],
};

interface HydratePayload {
  reducer: State;
}

const rootReducer = (
  state = initialState,
  action: Actions | { type: typeof HYDRATE; payload: HydratePayload },
): State => {
  switch (action.type) {
      // Please note that your reducer must have the HYDRATE action handler.
      // HYDRATE action handler must properly reconciliate the hydrated state on top of the existing state (if any).
    case HYDRATE:
      return { ...state, ...action.payload.reducer };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ fetchedData: action.data },
      };

    default:
      return state;
  }
};

export default rootReducer;
