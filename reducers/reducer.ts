import { HYDRATE } from 'next-redux-wrapper';
import { ExampleState, ActionsExample, actionTypesExample } from '../interfaces';

export const initialState: ExampleState = {
 error: null,
 placeholderData: [],
};

interface HydratePayload {
 rdcExample: ExampleState;
}

const reducer = (
    state = initialState,
    action: ActionsExample | { type: typeof HYDRATE; payload: HydratePayload },
): ExampleState => {
 switch (action.type) {
  case HYDRATE:
   return { ...state, ...action.payload.rdcExample };

  case actionTypesExample.LOAD_DATA_SUCCESS:
   return {
    ...state,
    ...{ placeholderData: action.data },
   };

  default:
   return state;
 }
};

export default reducer;