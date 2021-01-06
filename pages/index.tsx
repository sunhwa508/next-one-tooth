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
import { useDispatch } from 'react-redux';
import { END } from 'redux-saga';
import { wrapper } from '../store';
import { loadData, startClock, tickClock } from '../actions/action';
import Layout from '../components/layout';
import Clock from 'components/clock';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { RootStateInterface } from '../interfaces';
import Counter from 'components/counter';

const selectData = createSelector(
	(state: RootStateInterface) => state.rdcExample.lastUpdate,
	(state: RootStateInterface) => state.rdcExample.light,
	(lastUpdate, light) => ({ lastUpdate, light })
);

const Index = () => {
	const dispatch = useDispatch();
	const { lastUpdate, light } = useSelector(selectData);
	useEffect(() => {
		dispatch(startClock());
	}, [dispatch]);

	return (
		<Layout title="ONE-TOOTH">
			<h1>릴리즈노트</h1>
			<Clock lastUpdate={lastUpdate} light={light} />
			<Counter />
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
	store.dispatch(tickClock(false));

	if (!store.getState().placeholderData) {
		store.dispatch(loadData());
		store.dispatch(END);
	}

	await store.sagaTask?.toPromise();
});

export default Index;
