import React from 'react';
import { Post } from '../../interfaces';

interface ListParams {
 data: Post;
}

const List: React.FC<ListParams> = ({ data }: ListParams) => {
 return (
     <div>
      {data.id} / {data.name} / {data.contents}
     </div>
 );
};

export default List;