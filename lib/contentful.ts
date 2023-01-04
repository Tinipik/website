import axios from "axios"

export const fetchGraphQL = async (query: any, preview = false) => {
  return axios.post(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    JSON.stringify({ query }),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      }
    }
  ).then(response => response.data)
}