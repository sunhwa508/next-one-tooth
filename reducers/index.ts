import { combineReducers, Reducer } from 'redux';
import { RootStateInterface } from '../interfaces';
import reducer from './reducer';

const rootReducer: Reducer<RootStateInterface> = combineReducers<RootStateInterface>(
  {
    reducer,
  },
);

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
