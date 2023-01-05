import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import Logo from "../components/logo"
import Nav from "../components/nav"
import { getHomePage, HomePage } from '../lib/home'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface Props {
  page: HomePage
  preview: boolean;
  children?: React.ReactNode;
}

const Index: NextPage<Props> = ({ page, preview }) => {
  return (
    <Layout fullHeight preview={preview}>
      <Head>
        <title>Quentin Picault</title>
      </Head>
      <div className="container h-full px-5 flex flex-col justify-center items-center">
        <div className="md:w-[500px] w-[90%] bg-glass p-8 z-0">
          <div className="w-[100%] h-[100%] top-0 left-0 bg-glass p-8 -z-1 absolute rotate-2 opacity-60"/>
          <img
            className="md:w-[32%] md:-top-[16%] md:left-[34%] w-[50%] -top-[12%] left-[25%] rounded-full z-20 absolute"
            src={page?.avatar?.url}
            alt={page?.avatar?.title}
          />
          <Logo className="w-[102%] top-32 -left-[1%] z-20 absolute"/>
          <h3 className="sm:mt-48 mt-[70%] mb-4 text-xl opacity-75">
            {documentToReactComponents(page?.description?.json)}
          </h3>    
        </div>
        <Nav variant="home"/>
      </div>
    </Layout>
  ) 
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {

  const preview = ctx.preview ?? false
  const data = await getHomePage(preview)

  return {
    props: {
      preview: preview,
      page: data ?? null,
    },
  }
}

export default Index;
