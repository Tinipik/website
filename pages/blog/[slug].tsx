import React from 'react'
import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from 'next/link'
import Layout from '../../components/layout'
import Head from 'next/head'
import TopBar from "../../components/topbar"
import { IoIosArrowBack } from "react-icons/io";
import { BlogPost, getAllBlogPosts, getBlogPostBySlug } from "../../lib/blog"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import markdownStyles from '../../styles/markdown-styles.module.css'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

interface Props {
  post: BlogPost;
  preview: boolean;
  children?: React.ReactNode;
}

const findAsset = (post: BlogPost, id: string) => {
  const assets = post.content.links.assets.block as Array<any>
  const ind = assets.findIndex(asset => asset.sys.id === id)
  return assets[ind]
}

const renderOptions = (post: BlogPost) => {
  return {
    renderMark: {
      [MARKS.CODE]: (text: any) => <div className='inserted-code'>{text}</div>,
    },
    renderNode : {
      [BLOCKS.EMBEDDED_ASSET]: (node: any, next: any) => {
        const asset = findAsset(post, node?.data?.target?.sys?.id)
        return <img className='rounded-2xl mb-8 max-h-96 m-auto' src={asset?.url} alt={asset?.title}/>
      }
    }
  }
}

const BlogPostIndex: NextPage<Props> = ({ post, preview }) => {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`${post?.title} - Quentin Picault`}</title>
      </Head>

      <TopBar/>

      <div className="container p-6 md:p-10 mt-12 max-w-none bg-glass rounded-3xl">
        <div className="flex items-start mb-6">
          <Link className="button hover:button-hover" href="/blog">
            <IoIosArrowBack className="mt-[2px] -ml-1 mr-2"/>
            Retour
          </Link>
        </div>
        <img src={post?.picture?.url} alt={post?.picture?.title} className="w-full object-cover h-auto max-h-96 rounded-3xl"/>
        <h1 className="mt-4 md:mt-12 text-4xl md:text-6xl font-bold font-space tracking-tight">{post?.title}</h1>
        <div className="mt-6 flex items-center">
          <img src={post?.author?.picture?.url} alt={post?.author?.picture?.title} className="w-16 h-16 object-cover rounded-full"/>
          <div className="ml-4">
            <p className="text-lg">{post?.author?.fullName}</p>
            <p>{`Publié le ${format(post ? new Date(post.date) : new Date(0), 'PP', {locale: fr})}`}</p>
          </div>
        </div>
        <article className="pt-4 px-6 pb-6 md:px-10 md:pb-10 bg-white/60 mt-12 max-w-none rounded-3xl whitespace-pre-wrap">
          <div className={markdownStyles['markdown']}>
            {documentToReactComponents(post?.content?.json, renderOptions(post))}
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