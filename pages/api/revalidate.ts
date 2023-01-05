import { NextApiRequest, NextApiResponse } from "next"
import { getAllBlogPosts } from "../../lib/blog"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let inboundRevalToken = req.headers['x-vercel-reval-key']

  if (!inboundRevalToken) {
    return res
      .status(401)
      .json({ message: 'x-vercel-reval-key header not defined' })
  } else if (inboundRevalToken !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    let posts = await getAllBlogPosts()
    for (let post of posts) {
      await res.revalidate(`/blog/${post.slug}`)
    }
    await res.revalidate('/')
    await res.revalidate('/games')
    await res.revalidate('/blog')

    return res.json({ revalidated: true })

  } catch (err) {

    return res.status(500).send('Error revalidating')

  }
}
