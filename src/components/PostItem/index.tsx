import React from 'react';
import Link from 'next/link';
import { Post } from '../../interfaces';

type Props = {
  data: Post;
};

const PostItem = ({ data }: Props) => (
  <Link href={'/anonymous/[id]'} as={`/anonymous/${data.id}`}>
    <a>
     <div className={"shadow flex flex-col w-100 items-center justify-center relative rounded-lg  px-5 py-5 bg-gray"}>
      {data.id}: {data.name}
      <br />
      {data.contents}
     </div>
    </a>
  </Link>
);

export default PostItem;
