import React from 'react';
import Link from 'next/link';
import { Post } from '../../interfaces';

type Props = {
  data: Post;
};

const PostItem = ({ data }: Props) => (
  <Link href={'/anonymous/[id]'} as={`/anonymous/${data.id}`}>
    <a>
      {data.id}: {data.name}
      <br />
      {data.contents}
    </a>
  </Link>
);

export default PostItem;
