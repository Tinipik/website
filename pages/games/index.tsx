import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Layout from '../../components/layout'
import Head from 'next/head'
import TopBar from "../../components/topbar"
import PageTitle from "../../components/page-title"
import GameCard from "../../components/game-card"
import { GamesPage, Game, getAllGames, getGamesPage } from '../../lib/games'

interface Props {
  page: GamesPage;
  games: Array<Game>
  preview: boolean;
  children?: React.ReactNode;
}

const GamesIndex: NextPage<Props> = ({ page, games, preview }) => {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`${page?.title} - Quentin Picault`}</title>
      </Head>

      <TopBar/>

      <PageTitle title={page?.title}/>
      <p id="description" className="block test-lg">{page?.description}</p>

      <div className="container flex items-center justify-between flex-wrap">
        {games.map(game =>
          <GameCard
            key={game.slug}
            title={game.title}
            slug={game.slug}
            description={game.description}
            picture={game.picture}
            date={game.date}
            platforms={game.platforms}
            link={game.link}
          />
        )}
      </div>

    </Layout>
  ) 
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {

  const preview = ctx.preview ?? false
  const dataGamesPage = await getGamesPage(preview)
  const dataGames = await getAllGames(preview)

  return {
    props: {
      preview: preview,
      page: dataGamesPage ?? null,
      games: dataGames ?? []
    },
  }
}

export default GamesIndex;