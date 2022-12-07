import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import ArticleBody from '../../components/article-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import ArticleHeader from '../../components/article-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllArticlesWithSlug, getArticleAndMoreArticles } from '../../lib/api'
import ArticleTitle from '../../components/article-title'

interface Props {
  article: any;
  moreArticles: any[];
  preview: boolean;
  children?: React.ReactNode;
}

const Article: React.FC<Props> = ({ article, moreArticles, preview }) => {
  const router = useRouter()

  if (!router.isFallback && !article) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <ArticleTitle>Loading…</ArticleTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${article.title} | Next.js Blog Example`}
                </title>
              </Head>
              <ArticleHeader
                title={article.title}
                publishDate={article.publishDate}
              />
              <ArticleBody content={article.content} />
            </article>
            <SectionSeparator />
            {moreArticles && moreArticles.length > 0 && (
              <MoreStories articles={moreArticles} />
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps(props: any) {
  
  const params = props.params
  const preview = props.preview || false
  const data = await getArticleAndMoreArticles(params.slug, preview)

  return {
    props: {
      preview,
      article: data?.article ?? null,
      moreArticles: data?.moreArticles ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allArticles = await getAllArticlesWithSlug()
  return {
    paths: allArticles?.map((article: any) => `/articles/${article.slug}`) ?? [],
    fallback: true,
  }
}

export default Article;