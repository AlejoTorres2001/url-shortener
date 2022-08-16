import type { NextPage } from 'next'
import Head from 'next/head'
import UrlForm from '../components/UrlForm'
import useForm from '../hooks/useForm'
const Home: NextPage = () => {
  const {inputRef,EmailRef,handleSubmit,isSuccess,isError,data } = useForm()
  return (
    <>
      <Head>
        <title>url shortner</title>
      </Head>
      <main>
      <UrlForm/>
      </main>
    </>
  )
}

export default Home
