import * as React from 'react';

import { Post } from 'interfaces/index';

type ListDetailProps = {
  item: Post;
};

const PostDetail = ({ item: post }: ListDetailProps) => (
  <div className="flex-auto text-xl font-semibold dark:border-red-900 bg-red-50 dark:bg-red-900 rounded p-6 my-6">
    <h1>닉네임 {post.name}</h1>
    <p>ID: {post.id}</p>
    <p>내용 : {post.contents}</p>
  </div>
);

export default PostDetail;
