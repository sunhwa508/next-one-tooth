import { all, fork } from 'redux-saga/effects';

import sagaExample from './saga';

export default function* rootSaga() {
 yield all([fork(sagaExample)]);
}