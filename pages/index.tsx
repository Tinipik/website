import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import Logo from "../components/logo"
import Nav from "../components/nav"

interface Props {
  preview: boolean;
  children?: React.ReactNode;
}

const Index: React.FC<Props> = ({ preview }) => {
  return (
    <Layout fullHeight preview={preview}>
      <Head>
        <title>Quentin Picault</title>
      </Head>
      <div className="container h-full px-5 flex flex-col justify-center items-center">
        <div className="md:w-[500px] w-[90%] rounded-3xl bg-glassmorphism p-8 z-0">
          <div className="w-[100%] h-[100%] top-0 left-0 rounded-3xl bg-glassmorphism p-8 -z-1 absolute rotate-2 opacity-60"/>
          <img
            className="md:w-[32%] md:-top-[16%] md:left-[34%] w-[50%] -top-[12%] left-[25%] rounded-full z-20 absolute"
            src="/avatar.jpg"
            alt="Quentin Picault's avatar"
          />
          <Logo className="w-[102%] top-32 -left-[1%] z-20 absolute"/>
          <h3 className="sm:mt-48 mt-[70%] text-xl opacity-75">
            Designing things that could be immersive or helpful is what I do.
            <br/>I also like coding stuff for fun 🎉🧑🏻‍💻🎉
          </h3>    
        </div>
        <Nav variant="home"/>
      </div>
    </Layout>
  ) 
}

export async function getStaticProps({ preview = false }) {
  return {
    props: { preview },
  }
}

export default Index;
