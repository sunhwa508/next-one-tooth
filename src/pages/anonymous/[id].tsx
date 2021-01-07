import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { samplePostData } from '../../utils/sample-data';
import { Post } from '../../interfaces';
import Layout from '../../layouts/layout';
import PostDetail from '../../components/PostDetail';

type Props = {
  item?: Post;
  errors?: string;
};

const AnonymousPost = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${item ? item.name : '게시물보기'} `}>
      {item && <PostDetail item={item} />}
    </Layout>
  );
};

export default AnonymousPost;

// Docs Specify dynamic routes to pre-render based on data.
// data에 기반하여 pre-render할 동적 라우팅을 적어준다. (getStaticProps와 함께 쓰임.)
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = samplePostData.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
};

//DOCS Fetch data at build time.
//빌드 시 한번 패치되며 변경 되지 않는다.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = samplePostData.find((data) => data.id === Number(id));
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
