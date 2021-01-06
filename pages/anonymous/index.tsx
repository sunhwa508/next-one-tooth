import { GetStaticProps } from 'next'

import { Post } from '../../interfaces'
import { samplePostData } from '../../utils/sample-data'
import Layout from '../../components/layout'
import List from "../../components/List";

type Props = {
  items: Post[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="익명게시판">
    <h1>익명게시판</h1>
   <p>You are currently on: /users</p>
   <List items={items} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: Post[] = samplePostData
  return { props: { items } }
}

export default WithStaticProps
