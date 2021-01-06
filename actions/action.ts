import {
 actionTypesExample,
 Failure,
 Increment,
 Decrement,
 Reset,
 LoadData,
 StartClock,
 TickClock,
 User} from '../interfaces';

export function failure(error: Error): Failure {
 return {
  type: actionTypesExample.FAILURE,
  error,
 };
}

export function increment(): Increment {
 return { type: actionTypesExample.INCREMENT };
}

export function decrement(): Decrement {
 return { type: actionTypesExample.DECREMENT };
}

export function reset(): Reset {
 return { type: actionTypesExample.RESET };
}

export function loadData(): LoadData {
 return { type: actionTypesExample.LOAD_DATA };
}

export function loadDataSuccess(data: User[]): { data: User[]; type: actionTypesExample.LOAD_DATA_SUCCESS } {
 return {
  type: actionTypesExample.LOAD_DATA_SUCCESS,
  data,
 };
}

export function startClock(): StartClock {
 return { type: actionTypesExample.START_CLOCK };
}

export function tickClock(isServer: boolean): TickClock {
 return {
  type: actionTypesExample.TICK_CLOCK,
  light: !isServer,
  ts: Date.now(),
 };
}