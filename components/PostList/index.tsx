import * as React from 'react'
import PostItem from './PostItem'
import { Post } from '../interfaces'

type Props = {
  items: Post[]
}

const PostList = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <PostItem data={item} />
      </li>

    ))}
  </ul>
)

export default PostList
