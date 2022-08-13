// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createUrl } from '../../server/services/createUrl'
import { findUrl } from '../../server/services/findUrl'
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
  const { url, userEmail }:{url:string,userEmail:string} = req.body
  if (!url) {
    return res.status(400).json({ statusCode: 400, message: 'Missing url' })
  }
  if (!userEmail) {
    return res
      .status(400)
      .json({ statusCode: 400, message: 'Missing userEmail' })
  }
  try {
    // Check if the url is already in the database
    const alreadyExistsUrl = await findUrl(url)
    if (alreadyExistsUrl) {
      return res
        .status(200)
        .json({ statusCode: 200, shortUrl: alreadyExistsUrl.shortUrl})
    }
    // Create a new url in the database
    let shortUrl = shortenUrl()
    let isUnique = await verfyShortenUrl(shortUrl)
    // If the url is not unique, create a new shortened url
    while (!isUnique) {
      shortUrl = shortenUrl()
      isUnique = await verfyShortenUrl(shortUrl)
    }
    //write to DB
    const newUrl = await createUrl(
      shortUrl,
      url,
      userEmail
    )
    res.status(200).json({ statusCode: 200, shortUrl: newUrl.shortUrl })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}
