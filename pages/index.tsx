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


import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import { wrapper } from '../store'
import { loadData, startClock, tickClock } from '../actions/act'
import Layout from '../components/layout';

const Index = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startClock())
	}, [dispatch])

	return (
						<Layout title="ONE-TOOTH">
									<h1>릴리즈노트</h1>
								</Layout>
	)
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
	store.dispatch(tickClock(false))

	if (!store.getState().placeholderData) {
		store.dispatch(loadData())
		store.dispatch(END)
	}

	await store.sagaTask?.toPromise()
})

export default Index
