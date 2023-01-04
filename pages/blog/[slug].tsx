import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import React from 'react'
import Layout from '../../components/layout'
import Head from 'next/head'
import TopBar from "../../components/topbar"
import { IoIosArrowBack } from "react-icons/io";
import { BlogPost, getAllBlogPosts, getBlogPostBySlug } from "../../lib/blog"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import markdownStyles from '../../styles/markdown-styles.module.css'

interface Props {
  post: BlogPost;
  preview: boolean;
  children?: React.ReactNode;
}

const BlogPostIndex: NextPage<Props> = ({ post, preview }) => {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Quentin Picault | ${post.title}`}</title>
      </Head>

      <TopBar/>

      <div className="container p-6 md:p-10 mt-12 max-w-none bg-glass rounded-3xl">
        <div className="flex items-start mb-6">
          <a className="button hover:button-hover" href="/blog">
            <IoIosArrowBack className="mt-[2px] -ml-1 mr-2"/>
            Back
          </a>
        </div>
        <img src={post.picture.url} alt={post.picture.title} className="w-full object-cover h-auto max-h-96 rounded-3xl"/>
        <h1 className="mt-4 md:mt-12 text-4xl md:text-6xl font-bold font-space tracking-tight">{post.title}</h1>
        <div className="mt-6 flex items-center">
          <img src={post.author.picture.url} alt={post.author.picture.title} className="w-16 h-16 object-cover rounded-full"/>
          <div className="ml-4">
            <p className="text-lg">{post.author.fullName}</p>
            <p>{`Published on ${"May 18 2022"}`}</p>
          </div>
        </div>
        <article className="p-6 md:p-10 bg-white/60 mt-12 max-w-none rounded-3xl">
          <div className={markdownStyles['markdown']}>
            {documentToReactComponents(post.content.json)}
          </div>
        </article>
      </div>

    </Layout>
  ) 
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (ctx) => {

  const { params } = ctx;
  const { slug } = params!;
  const preview = ctx.preview ?? false
  
  const dataBlogPost = await getBlogPostBySlug(slug, preview)

  return {
    props: {
      preview: preview,
      post: dataBlogPost ?? null
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllBlogPosts()
  return {
    paths: data?.map(({ slug = "" }) => `/blog/${slug}`) ?? [],
    fallback: true,
  }
}

export default BlogPostIndex;