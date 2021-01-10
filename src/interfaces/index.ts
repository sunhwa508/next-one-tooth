// 타입 설정
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

export interface ApiState {
  apiResult: ApiResult | null;
  error: null | Error;
}
export enum actionTypes {
  FAILURE = 'FAILURE',
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  HYDRATE = 'HYDRATE',
}

export type Actions = Failure | LoadData | LoadDataSuccess;

export interface Failure {
  type: actionTypes.FAILURE;
  error: Error;
}

export interface LoadData {
  type: actionTypes.LOAD_DATA;
}

export interface LoadDataSuccess {
  data: any;
  type: actionTypes.LOAD_DATA_SUCCESS;
}

export interface State {
  error: null | Error;
  fetchedData: [];
}

export interface RootStateInterface {
  reducer: State;
}
export interface LooseObject {
  [key: string]: any;
}
