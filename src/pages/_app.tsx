import HeaderLayout from '@/components/layout/HeaderLayout'
import ContainerLayout from '@/components/layout/ContainerLayout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-primary flex w-full h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderLayout />
      {/* <ContainerLayout>
        <Component {...pageProps} />
      </ContainerLayout> */}
    </div>
  )
}

export default MyApp
