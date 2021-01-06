import { HYDRATE } from 'next-redux-wrapper';
import { ExampleState, ActionsExample, actionTypesExample } from '../interfaces';

export const initialState: ExampleState = {
 count: 0,
 error: null,
 lastUpdate: 0,
 light: false,
 placeholderData: null,
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

  case actionTypesExample.INCREMENT:
   return {
    ...state,
    ...{ count: state.count + 1 },
   };

  case actionTypesExample.DECREMENT:
   return {
    ...state,
    ...{ count: state.count - 1 },
   };

  case actionTypesExample.RESET:
   return {
    ...state,
    ...{ count: initialState.count },
   };

  case actionTypesExample.TICK_CLOCK:
   return {
    ...state,
    ...{ lastUpdate: action.ts, light: !!action.light },
   };

  default:
   return state;
 }
};

export default reducer;