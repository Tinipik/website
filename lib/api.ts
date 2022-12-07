const ARTICLE_GRAPHQL_FIELDS = `
slug
title
description
publishDate
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`

async function fetchGraphQL(query: any, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractArticle(fetchResponse: any) {
  return fetchResponse?.data?.articleCollection?.items?.[0]
}

function extractArticleEntries(fetchResponse: any) {
  return fetchResponse?.data?.articleCollection?.items
}

export async function getPreviewArticleBySlug(slug: any) {
  const entry = await fetchGraphQL(
    `query {
      articleCollection(where: { slug: "${slug}" }, preview: true, limit: 10) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractArticle(entry)
}

export async function getAllArticlesWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      articleCollection(where: { slug_exists: true }, order: publishDate_DESC, limit: 10) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractArticleEntries(entries)
}

export async function getAllArticlesForHome(preview: any) {
  const entries = await fetchGraphQL(
    `query {
      articleCollection(order: publishDate_DESC, preview: ${preview ? 'true' : 'false'}, limit: 10) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractArticleEntries(entries)
}

export async function getArticleAndMoreArticles(slug: any, preview: any) {
  const entry = await fetchGraphQL(
    `query {
      articleCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  const entries = await fetchGraphQL(
    `query {
      articleCollection(where: { slug_not_in: "${slug}" }, order: publishDate_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return {
    article: extractArticle(entry),
    moreArticles: extractArticleEntries(entries),
  }
}
