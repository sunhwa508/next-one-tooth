import React from 'react';
import { User } from '../../interfaces';

interface ListParams {
  data: User;
}

const List: React.FC<ListParams> = ({ data }: ListParams) => {
  const { id, name, image, status } = data;
  return (
    // @ts-ignore
    <details close>
      <summary>도수 M 버전 {id}</summary>
      <p>{name}</p>
      <img src={image} alt={'character'} />
      <p>Status : {status}</p>
    </details>
  );
};

export default List;
