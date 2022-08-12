import type { NextPage } from 'next'
import Head from 'next/head'
import useForm from '../hooks/useForm'

const Home: NextPage = () => {
  const {inputRef,EmailRef,handleSubmit,isSuccess,isError } = useForm()
  return (
    <>
      <Head>
        <title>url shortner</title>
      </Head>
      <main>
        {isSuccess && <p>url sent</p>}
        {isError && <p>error</p>}
        <h1>url shortner</h1>
        <div className="">
          <form onSubmit={handleSubmit}>
            <label htmlFor="url">url</label>
            <input type="text" placeholder="url" ref={inputRef} />
            <label htmlFor="email">url</label>
            <input type="email" placeholder="email" ref={EmailRef} />
            <button type="submit">shorten</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default Home
