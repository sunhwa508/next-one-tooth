import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { failure, loadDataSuccess } from '../actions/action';
import { User, actionTypesExample } from '../interfaces';

function* loadDataSaga() {
  try {
    const { status, data }: AxiosResponse<User[]> = yield call(
      axios.get,
      'https://rickandmortyapi.com/api/character/',
    );
    // @ts-ignore
    const { results } = data;
    if (status === 200) {
      yield put(loadDataSuccess(results));
    }
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga(): Generator {
  yield all([takeLatest(actionTypesExample.LOAD_DATA, loadDataSaga)]);
}

export default rootSaga;
