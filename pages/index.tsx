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
    <Layout preview={preview}>
      <Head>
        <title>Quentin Picault</title>
      </Head>
      <div className="container mx-auto px-5 flex justify-center h-[22rem] relative mt-40">
        <div className="md:w-[500px] w-[90%] h-[22rem] rounded-3xl bg-glassmorphism z-10 rotate-2 absolute"></div>
        <div className="md:w-[500px] w-[90%] h-[22rem] rounded-3xl bg-glassmorphism z-10 absolute"></div>
        <Logo className="md:w-[512px] w-[92%] top-32 z-20 absolute"/>
        <img className="w-40 h-40 rounded-full -top-12 z-20 absolute" src="/avatar.jpg" alt="Quentin Picault avatar"></img>
        <div className="md:w-[500px] w-[90%] p-8 top-48 z-20 absolute">
          <h3 className="text-xl opacity-75">
            Designing things that could be immersive or helpful is what I do.
            <br/>I also like coding stuff for fun 🎉🧑🏻‍💻🎉
          </h3>
        </div>
      </div>
      <Nav variant="home"/>
    </Layout>
  ) 
}

export async function getStaticProps({ preview = false }) {
  return {
    props: { preview },
  }
}

export default Index;
