import React from 'react';
import { GetStaticProps } from 'next';

import { samplePostData } from 'utils/sample-data';
import { Post } from '../../interfaces';
import Layout from '../../components/layout';
import PostList from '../../components/PostList';

type Props = {
  items: Post[];
};

const Anonymous = ({ items }: Props) => (
  //getStaticProps 에서 받아온 items을 가져와 전달한다.
  <Layout title="익명게시판">
    <h1>익명게시판</h1>
    <PostList items={items} />
  </Layout>
);

//docs정의: Fetch data at build time, pre-render for Static Generation
// 데이터를 받아 props 로 전달해준다.
export const getStaticProps: GetStaticProps = async () => {
  const items: Post[] = samplePostData;
  return { props: { items } };
};

export default Anonymous;
