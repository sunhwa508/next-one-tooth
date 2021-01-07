import { combineReducers, Reducer } from 'redux';
import { RootStateInterface } from '../interfaces';
import rdcExample from './reducer';

const rootReducer: Reducer<RootStateInterface> = combineReducers<RootStateInterface>(
  {
    rdcExample,
  },
);

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
