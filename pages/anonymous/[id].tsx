import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { samplePostData } from 'utils/sample-data';
import { Post } from '../../interfaces';
import Layout from '../../components/layout';
import PostDetail from '../../components/PostDetail';

type Props = {
	item?: Post;
	errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
	if (errors) {
		return (
			<Layout title="Error | Next.js + TypeScript Example">
				<p>
					<span style={{ color: 'red' }}>Error:</span> {errors}
				</p>
			</Layout>
		);
	}

	return <Layout title={`${item ? item.name : '게시물보기'} `}>{item && <PostDetail item={item} />}</Layout>;
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
	// Get the paths we want to pre-render based on anonymous
	const paths = samplePostData.map((user) => ({
		params: { id: user.id.toString() },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const id = params?.id;
		const item = samplePostData.find((data) => data.id === Number(id));
		// By returning { props: item }, the StaticPropsDetail component
		// will receive `item` as a prop at build time
		return { props: { item } };
	} catch (err) {
		return { props: { errors: err.message } };
	}
};
