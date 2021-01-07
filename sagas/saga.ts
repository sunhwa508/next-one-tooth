import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { failure, loadDataSuccess } from '../actions/action';
import { User, actionTypes, LooseObject } from '../interfaces';

//사가 함수의 예
function* loadDataSaga() {
  try {
    // call 입력된 함수를 대신 호출함입력된 함수가 프로미스를 반환하면 프로미스가 처리됨 상태가 될 때까지 기다림
    const { status, data }: AxiosResponse<User[]> = yield call(
      axios.get,
      'https://rickandmortyapi.com/api/character/',
    );

    const { results }: LooseObject = data;

    if (status === 200) {
      // 상태값이 200일때 로드 데이터를 실행 시킴.
      // yield는 제너레이터를 멈추거나 다시 실행하는데 사용된다.
      yield put(loadDataSuccess(results));
    }
  } catch (err) {
    // 에러처리
    yield put(failure(err));
  }
}

function* rootSaga(): Generator {
  //all, fork: 사가 함수를 추가할 때 사용하는 함수
  //takeLatest 리퀘스트 응답만 받고 싶을 때 사용
  //takeEvery 여러개의 fetchData 인스턴스를 동시에 시작하게 함
  yield all([takeLatest(actionTypes.LOAD_DATA, loadDataSaga)]);
}

export default rootSaga;
