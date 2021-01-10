import React from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { createSelector } from 'reselect';
import { wrapper } from '../../../store';
import { loadData } from '../../actions/action';
import Layout from '../../layouts/layout';

import { RootStateInterface } from 'interfaces/index';
import List from 'components/list';

const selectData = createSelector(
    (state: RootStateInterface) => state.reducer.fetchedData,
    (state: RootStateInterface) => state.reducer.error,
    (fetchedData, error) => ({ fetchedData, error }),
);

const Index = () => {
 const { fetchedData, error } = useSelector(selectData);

 return (
     <Layout title="ONE-TOOTH">
      <div className={"cursor-pointer shadow grid grid-cols-3 gap-4 items-center justify-between relative rounded-lg  px-5 py-5 bg-gray"}>
       {fetchedData &&
       fetchedData.map((v, k) => {
        return <List key={`list-${k}`} data={v} />;
       })}
       {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      </div>

      <div  className="absolute top-0 right-0 btn btn-secondary mr-4 mt-4 cursor-pointer"> 검색</div>
     </Layout>
 );
};

// getServerSideProps가 Index먼저 실행된다
// export const getServerSideProps = wrapper.getServerSideProps((store) => {
//   // REQUEST가 SUCCESS가 될 때까지 기다려줌
//   store.dispatch(END);
//   await store.sagaTask?.toPromise();
// });

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
 if (!store.getState().fetchedData) {
  store.dispatch(loadData());
  store.dispatch(END);
 }

 await store.sagaTask?.toPromise();
});

export default Index;
