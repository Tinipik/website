import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Layout from '../../components/layout'
import Head from 'next/head'
import TopBar from "../../components/topbar"
import PageTitle from "../../components/page-title"
import BlogPostCard from '../../components/blog-post-card'
import { BlogPage, BlogPost, getAllBlogPosts, getBlogPage } from '../../lib/blog'

interface Props {
  page: BlogPage;
  posts: Array<BlogPost>
  preview: boolean;
  children?: React.ReactNode;
}

const BlogIndex: NextPage<Props> = ({ page, posts, preview }) => {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`${page?.title} - Quentin Picault`}</title>
      </Head>

      <TopBar/>

      <PageTitle title={page?.title}/>
      <p id="description" className="block test-lg">{page?.description}</p>

      <div className="container flex items-center justify-between flex-wrap">
        {posts.map(post =>
          <BlogPostCard
            key={post.slug}
            title={post.title}
            slug={post.slug}
            picture={post.picture}
            description={post.description}
            date={post.date}
          />
        )}
      </div>

    </Layout>
  ) 
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {

  const preview = ctx.preview ?? false
  const dataBlogPage = await getBlogPage(preview)
  const dataBlogPosts = await getAllBlogPosts(preview)

  return {
    props: {
      preview: preview,
      page: dataBlogPage ?? null,
      posts: dataBlogPosts ?? []
    },
  }
}

export default BlogIndex;