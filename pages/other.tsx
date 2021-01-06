import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { wrapper } from '../store';
import { startClock, tickClock } from '../actions/action';
import Layout from 'components/layout';

const Other = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startClock());
	}, [dispatch]);

	return (
		<Layout title="ONE-TOOTH">
			<h1>릴리즈노트</h1>
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
	store.dispatch(tickClock(false));
});

export default Other;
