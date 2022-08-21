import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthContextProvider from '../context/authContext'
function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp
