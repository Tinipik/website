import { fetchGraphQL } from "./contentful";

export interface GamesPage {
  title: string;
  description: string;
}

export interface Game {
  title: string;
  slug: string;
  description: string;
  date: Date;
  picture: {
    title: string;
    url: string;
  }
  platforms: Array<"html5"|"windows"|"linux"|"macos"|"android"|"ios"|"switch"|"ps"|"xbox">;
  link: string;
}

const GAME_PAGE_FIELDS = `
title
description
`

const GAME_FIELDS = `
title
slug
description
date
picture {
  title
  url
}
platforms
link
`

export const getGamesPage = async (preview = false) => {
  const res  = await fetchGraphQL(
    `query {
      gamesPageCollection(preview: ${preview ? 'true' : 'false'}, limit: 1) {
        items {
          ${GAME_PAGE_FIELDS}
        }
      }
    }`,
    preview
  )
  return res?.data?.gamesPageCollection?.items?.[0]
}

export const getAllGames = async (preview = false) => {
  const res = await fetchGraphQL(
    `query {
      gameCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${GAME_FIELDS}
        }
      }
    }`,
    preview
  )
  return res?.data?.gameCollection?.items
}
