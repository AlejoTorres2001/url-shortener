// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { shortenUrl } from '../../server/services/shortUrl'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ statusCode: 405, message: 'Method Not Allowed' })
  }
  const {url,userEmail} = req.body
  if (!url) {
    return res.status(400).json({ statusCode: 400, message: 'Missing url' })
  }
  if (!userEmail) {
    return res.status(400).json({ statusCode: 400, message: 'Missing userEmail' })
  }
  try {
    const shortenedUrl = await shortenUrl(url,userEmail)
    res.status(200).json({ statusCode: 200, url: shortenedUrl })
  } catch (error:any) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
 
}
