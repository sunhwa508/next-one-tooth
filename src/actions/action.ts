import { actionTypes, Failure, LoadData, User } from '../interfaces';

//액션 정의 (액션 객체 생성 후 함수리턴)
export function failure(error: Error): Failure {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function loadData(): LoadData {
  return { type: actionTypes.LOAD_DATA };
}

export function loadDataSuccess(
  data: User[],
): { data: User[]; type: actionTypes.LOAD_DATA_SUCCESS } {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}
