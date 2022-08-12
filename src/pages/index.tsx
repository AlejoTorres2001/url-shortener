import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
  }
  return (
    <>
      <Head>
        <title>url shortner</title>
      </Head>
      <main>
        <h1>url shortner</h1>
        <div className="">
          <form onSubmit={handleSubmit}>
            <label htmlFor="url">url</label>
            <input type="text" placeholder="url" />
            <button type="submit">shorten</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default Home
