import { fetchGraphQL } from "./contentful";

export interface BlogPage {
  title: string;
  description: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  author: {
    fullName: string;
    picture: {
      title: string;
      url: string;
    }
  }
  picture: {
    title: string;
    url: string;
  }
  description: string;
  date: string;
  content: {
    json: any
  }
}

const BLOG_PAGE_FIELDS = `
title
description
`

const BLOG_POST_FIELDS = `
title
slug
author {
  fullName
  picture {
    title
    url
  }
}
picture {
  title
  url
}
description
date
content {
  json
}
`

export const getBlogPage = async (preview = false) => {
  const res  = await fetchGraphQL(
    `query {
      blogPageCollection(preview: ${preview ? 'true' : 'false'}, limit: 1) {
        items {
          ${BLOG_PAGE_FIELDS}
        }
      }
    }`,
    preview
  )
  return res?.data?.blogPageCollection?.items?.[0]
}

export const getAllBlogPosts = async (preview = false) => {
  const res = await fetchGraphQL(
    `query {
      blogPostCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${BLOG_POST_FIELDS}
        }
      }
    }`,
    preview
  )
  return res?.data?.blogPostCollection?.items
}

export const getBlogPostBySlug = async (slug: string, preview = false) => {
  const res  = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, preview: ${preview ? 'true' : 'false'}, limit: 1) {
        items {
          ${BLOG_POST_FIELDS}
        }
      }
    }`,
    preview
  )
  return res?.data?.blogPostCollection?.items?.[0]
}
