import { NextApiRequest, NextApiResponse } from 'next'

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const { secret, redirect } = req.query

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !redirect) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  res.setPreviewData({})

  res.setHeader('Content-Type', 'text/html')
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirect}" />
    <script>window.location.href = '${redirect}'</script>
    </head>
    </html>`
  )
  res.end()
}
