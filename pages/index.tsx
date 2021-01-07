// import React from 'react';
// import Layout from '../components/layout';
//
// const IndexPage = () => (
// 	<Layout title="ONE-TOOTH">
// 		<h1>릴리즈노트</h1>
// 	</Layout>
// );
//
// export default IndexPage;

import React from 'react';
import {  useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { createSelector } from 'reselect';
import { wrapper } from '../store';
import {loadData} from '../actions/action';
import Layout from '../components/layout';

import { RootStateInterface } from '../interfaces';
import List from "components/list";

const selectData = createSelector(
				(state: RootStateInterface) => state.rdcExample.placeholderData,
				(state: RootStateInterface) => state.rdcExample.error,
	(placeholderData, error) => ({ placeholderData, error })
);

const Index = () => {
	const { placeholderData, error} = useSelector(selectData);

	return (
		<Layout title="ONE-TOOTH">
			<h1>릴리즈노트</h1>
			{placeholderData &&
			placeholderData.map((v, k) => {
				return <List key={`list-${k}`} data={v} />;
			})}
			{error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//비동기 api
	if (!store.getState().placeholderData) {
		store.dispatch(loadData());
		store.dispatch(END);
	}

	await store.sagaTask?.toPromise();
});

export default Index;
