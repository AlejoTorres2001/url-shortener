// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createUrl } from '../../server/services/createUrl'
import { shortenUrl } from '../../server/services/shortUrl'
import { verfyShortenUrl } from '../../server/services/verifyShortenUrl'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ statusCode: 405, message: 'Method Not Allowed' })
  }
  const { url, userEmail } = req.body
  if (!url) {
    return res.status(400).json({ statusCode: 400, message: 'Missing url' })
  }
  if (!userEmail) {
    return res
      .status(400)
      .json({ statusCode: 400, message: 'Missing userEmail' })
  }
  try {
    let shortenedUrl = shortenUrl()
    let isUnique = await verfyShortenUrl(shortenedUrl)
    while (!isUnique) {
      console.log('not unique!')
      shortenedUrl = shortenUrl()
      isUnique = await verfyShortenUrl(shortenedUrl)
    }
    console.log('it is unique!')
    const newUrl = await createUrl(
      shortenedUrl,
      url as string,
      userEmail as string
    )
    res.status(200).json({ statusCode: 200, shortenUrl: newUrl.shortUrl })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}
