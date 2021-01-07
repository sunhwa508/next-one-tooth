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
			<Layout title="Error">
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
	const paths = samplePostData.map((user) => ({
		params: { id: user.id.toString() },
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const id = params?.id;
		const item = samplePostData.find((data) => data.id === Number(id));
		return { props: { item } };
	} catch (err) {
		return { props: { errors: err.message } };
	}
};
