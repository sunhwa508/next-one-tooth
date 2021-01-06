import React from 'react';
import { GetStaticProps } from 'next';

import { samplePostData } from 'utils/sample-data';
import { Post } from '../../interfaces';
import Layout from '../../components/layout';
import PostList from '../../components/PostList';

type Props = {
	items: Post[];
};

const WithStaticProps = ({ items }: Props) => (
	<Layout title="익명게시판">
		<h1>익명게시판</h1>
		<PostList items={items} />
	</Layout>
);

export const getStaticProps: GetStaticProps = async () => {
	const items: Post[] = samplePostData;
	return { props: { items } };
};

export default WithStaticProps;
