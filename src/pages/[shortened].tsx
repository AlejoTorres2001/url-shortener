import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { prisma } from '../server/client/client'
const Shortened: NextPage = () => {
  return <div></div>
}

export default Shortened

export async function getServerSideProps({ params }:{params: {shortened: string}}) {
  const { shortened } = params
  const shortenedUrl = await prisma.link.findUnique({
    where: {
      shortUrl: shortened
    }
  })
  if (!shortenedUrl) {
    return {
     redirect: {
        destination: '/',
    }
  }
}
  return {
    redirect: {
      destination: shortenedUrl.url
    }
  }
}
