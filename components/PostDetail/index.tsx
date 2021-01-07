import * as React from 'react';

import { Post } from '../../interfaces';

type ListDetailProps = {
  item: Post;
};

const PostDetail = ({ item: post }: ListDetailProps) => (
  <div>
    <h1>닉네임 {post.name}</h1>
    <p>ID: {post.id}</p>
    <p>내용 : {post.contents}</p>
  </div>
);

export default PostDetail;
