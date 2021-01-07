import React from 'react';
import { User } from '../../interfaces';

interface ListParams {
  data: User;
}

const List: React.FC<ListParams> = ({ data }: ListParams) => {
  const { id, name, image, status } = data;
 return (
     // @ts-ignore
    <details className={"max-w-800 text-center"}  close={"true"}>
      <summary className={"bg-gray-100 rounded-xl md:p-5 shadow"}>도수 M 버전 {id}</summary>
      <p>{name}</p>
      <img className={" h-32 rounded-full mx-auto"} src={image} alt={'character'} />
      <p>Status : {status}</p>
    </details>
  );
};

export default List;
