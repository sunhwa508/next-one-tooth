import {
 actionTypesExample,
 Failure,
 LoadData,
 User} from '../interfaces';

export function failure(error: Error): Failure {
 return {
  type: actionTypesExample.FAILURE,
  error,
 };
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