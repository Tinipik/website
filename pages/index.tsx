import React from 'react'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroArticle from '../components/hero-article'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllArticlesForHome } from '../lib/api'
import Head from 'next/head'

interface Props {
  preview: boolean;
  allArticles: any[];
  children?: React.ReactNode;
}

const Index: React.FC<Props> = ({ preview, allArticles }) => {
  const heroArticle = allArticles[0]
  const moreArticles = allArticles.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example</title>
        </Head>
        <Container>
          <Intro />
          {heroArticle && (
            <HeroArticle
              title={heroArticle.title}
              publishDate={heroArticle.publishDate}
              slug={heroArticle.slug}
              description={heroArticle.description}
            />
          )}
          {moreArticles.length > 0 && <MoreStories articles={moreArticles} />}
        </Container>
      </Layout>
    </>
  ) 
}

export async function getStaticProps({ preview = false }) {
  const allArticles = (await getAllArticlesForHome(preview)) ?? []
  return {
    props: { preview, allArticles },
  }
}

export default Index;
