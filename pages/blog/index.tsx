import React from 'react'
import Layout from '../../components/layout'
import Head from 'next/head'
import TopBar from "../../components/topbar"
import PageTitle from "../../components/page-title"
import BlogCard from "../../components/blog-card"

interface Props {
  preview: boolean;
  children?: React.ReactNode;
}

const Blog: React.FC<Props> = ({ preview }) => {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Quentin Picault | Blog</title>
      </Head>

      <TopBar/>
      <PageTitle title="Blog"/>

      <div className="container flex items-center justify-between flex-wrap">
        <BlogCard
          imgUrl="https://img.itch.zone/aW1nLzgwMTY3OTMuanBn/original/YoNpqA.jpg"
          title="Staff of Ages"
          description="Some enemies need to be older or younger in order to die. You can also apply the beam on trees to make a path."
          downloadUrl="https://tinge.itch.io/staff-of-ages"
        />
                <BlogCard
          imgUrl="https://img.itch.zone/aW1nLzgwMTY3OTMuanBn/original/YoNpqA.jpg"
          title="Staff of Ages"
          description="Some enemies need to be older or younger in order to die. You can also apply the beam on trees to make a path."
          downloadUrl="https://tinge.itch.io/staff-of-ages"
        />
                <BlogCard
          imgUrl="https://img.itch.zone/aW1nLzgwMTY3OTMuanBn/original/YoNpqA.jpg"
          title="Staff of Ages"
          description="Some enemies need to be older or younger in order to die. You can also apply the beam on trees to make a path."
          downloadUrl="https://tinge.itch.io/staff-of-ages"
        />
      </div>

    </Layout>
  ) 
}

export async function getStaticProps({ preview = false }) {
  return {
    props: { preview },
  }
}

export default Blog;