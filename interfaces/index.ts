//각 포스트 타입 설정
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export interface animal {
  id: number;
  name: string;
}

export type Post = {
  id: number
  name: string
  contents: string
}
export interface ApiResult {
  id: number;
  name: string;
}

export interface ApiExampleState {
  apiResult: ApiResult | null;
  error: null | Error;
}
export enum actionTypesExample {
  FAILURE = 'FAILURE',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  START_CLOCK = 'START_CLOCK',
  TICK_CLOCK = 'TICK_CLOCK',
}

export type ActionsExample =
    | Failure
    | Increment
    | Decrement
    | Reset
    | LoadData
    | LoadDataSuccess
    | StartClock
    | TickClock;

export interface Failure {
  type: actionTypesExample.FAILURE;
  error: Error;
}

export interface Increment {
  type: actionTypesExample.INCREMENT;
}

export interface Decrement {
  type: actionTypesExample.DECREMENT;
}

export interface Reset {
  type: actionTypesExample.RESET;
}

export interface LoadData {
  type: actionTypesExample.LOAD_DATA;
}

export interface LoadDataSuccess {
  type: actionTypesExample.LOAD_DATA_SUCCESS;
}

export interface StartClock {
  type: actionTypesExample.START_CLOCK;
}

export interface TickClock {
  type: actionTypesExample.TICK_CLOCK;
  light: boolean;
  ts: number;
}

export interface ApiResult {
  id: number;
  name: string;
}

export interface ApiExampleState {
  apiResult: ApiResult | null;
  error: null | Error;
}


export interface ExampleState {
  count: number;
  error: null | Error;
  lastUpdate: number;
  light: boolean;
  placeholderData: Post[] | null;
}

export interface RootStateInterface {
  rdcExample: ExampleState;
}

export const actionTypes = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK',
  HYDRATE: 'HYDRATE',
}