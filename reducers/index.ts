import { combineReducers, Reducer, AnyAction } from 'redux';
import { RootStateInterface } from '../interfaces';
import rdcExample from './reducer';


const rootReducer: Reducer<RootStateInterface, AnyAction> = combineReducers<RootStateInterface>({
 rdcExample,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;