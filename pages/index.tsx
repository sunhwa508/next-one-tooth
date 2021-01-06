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

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import Clock from 'components/clock';
import { createSelector } from 'reselect';
import Counter from 'components/counter';
import { wrapper } from '../store';
import { startClock, tickClock } from '../actions/action';
import Layout from '../components/layout';

import { RootStateInterface } from '../interfaces';
import List from "components/list";

const selectData = createSelector(
				(state: RootStateInterface) => state.rdcExample.placeholderData,
	(state: RootStateInterface) => state.rdcExample.lastUpdate,
	(state: RootStateInterface) => state.rdcExample.light,
				(state: RootStateInterface) => state.rdcExample.error,
	(placeholderData, lastUpdate, light, error) => ({ lastUpdate, light, placeholderData, error })
);

const Index = () => {
	const dispatch = useDispatch();
	const { lastUpdate, light , placeholderData, error} = useSelector(selectData);
	useEffect(() => {
		dispatch(startClock());
	}, [dispatch]);

	return (
		<Layout title="ONE-TOOTH">
			{placeholderData &&
			placeholderData.map((v, k) => {
				return <List key={`list-${k}`} data={v} />;
			})}
			{error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
			<h1>릴리즈노트</h1>
			<Clock lastUpdate={lastUpdate} light={light} />
			<Counter />
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
	store.dispatch(tickClock(false));
//비동기 api
	// if (!store.getState().placeholderData) {
	// 	store.dispatch(loadData());
	// 	store.dispatch(END);
	// }

	store.dispatch(END);
	await store.sagaTask?.toPromise();
});

export default Index;
