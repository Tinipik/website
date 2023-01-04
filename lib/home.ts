import { fetchGraphQL } from "./contentful";

export interface HomePage {
  title: string;
  avatar: {
    title: string;
    url: string;
  }
  description: {
    json: any
  };
}

const FIELDS = `
title
avatar {
  title
  url
}
description {
  json
}
`

export const getHomePage = async (preview = false): Promise<HomePage> => {
  const res  = await fetchGraphQL(
    `query {
      homePageCollection(preview: ${preview ? 'true' : 'false'}, limit: 1) {
        items {
          ${FIELDS}
        }
      }
    }`,
    preview
  )
  return res?.data?.homePageCollection?.items?.[0]
}
