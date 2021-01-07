import { actionTypes, Failure, LoadData, User } from '../interfaces';

//액션 타입 정의
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
  //받아온 데이터를 리턴해줌
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}
