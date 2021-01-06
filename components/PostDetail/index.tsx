import * as React from 'react'

import { Post } from '../interfaces'

type ListDetailProps = {
  item: Post
}

const PostDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default PostDetail
