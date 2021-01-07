import React from 'react';
import { END } from 'redux-saga';
import { wrapper } from '../../store';
import { loadData } from '../actions/action';

import Release from './release'

const Index = () => {


  return (
    <Release />
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState().placeholderData) {
    store.dispatch(loadData());
    store.dispatch(END);
  }
  await store.sagaTask?.toPromise();
});

export default Index;
