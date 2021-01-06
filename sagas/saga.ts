import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { failure, loadDataSuccess, tickClock } from '../actions/action';
import { User, actionTypesExample } from '../interfaces';

function* runClockSaga() {
 yield take(actionTypesExample.START_CLOCK);
 while (true) {
  yield put(tickClock(false));
  yield delay(1000);
 }
}

function* loadDataSaga() {
 try {
  const { status, data }: AxiosResponse<User[]> = yield call(
      axios.get,
      'https://rickandmortyapi.com/api/character/',
  );

  if (status === 200) {
   yield put(loadDataSuccess(data.results));
  }
 } catch (err) {
  yield put(failure(err));
 }
}

function* sagaExample(): Generator {
 yield all([call(runClockSaga), takeLatest(actionTypesExample.LOAD_DATA, loadDataSaga)]);
}

export default sagaExample;