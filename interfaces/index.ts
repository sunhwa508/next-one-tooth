//각 포스트 타입 설정
export interface User {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: [];
  url: string;
  created: string;
}

export type Post = {
  id: number;
  name: string;
  contents: string;
};

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
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
}

export type ActionsExample = Failure | LoadData | LoadDataSuccess;

export interface Failure {
  type: actionTypesExample.FAILURE;
  error: Error;
}

export interface LoadData {
  type: actionTypesExample.LOAD_DATA;
}

export interface LoadDataSuccess {
  data: any;
  type: actionTypesExample.LOAD_DATA_SUCCESS;
}

export interface ExampleState {
  error: null | Error;
  placeholderData: [];
}

export interface RootStateInterface {
  rdcExample: ExampleState;
}

export const actionTypes = {
  FAILURE: 'FAILURE',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  HYDRATE: 'HYDRATE',
};
