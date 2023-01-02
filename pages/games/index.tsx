import React from 'react'
import Layout from '../../components/layout'
import Head from 'next/head'
import TopBar from "../../components/topbar"
import PageTitle from "../../components/page-title"
import GameCard from "../../components/game-card"

interface Props {
  preview: boolean;
  children?: React.ReactNode;
}

const Games: React.FC<Props> = ({ preview }) => {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Quentin Picault | Games</title>
      </Head>

      <TopBar/>
      <PageTitle title="Games"/>

      <div className="container flex items-center justify-between flex-wrap">
        <GameCard
          title="Staff of Ages"
          slug="staff-og-ages"
          description="Some enemies need to be older or younger in order to die. You can also apply the beam on trees to make a path."
          picture="https://img.itch.zone/aW1nLzgwMTY3OTMuanBn/original/YoNpqA.jpg"
          date="2022-03-15"
          platforms={["windows"]}
          downloadLink="https://tinge.itch.io/staff-of-ages"
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

export default Games;