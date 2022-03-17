import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../assets/Icon.svg'
import Header from '../components/Header'
import MarketplaceStore from '../components/MarketplaceStats'
import NftList from '../components/NftList'

const Home: NextPage = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-[#0A0817] pb-2
    text-white"
    >
      <Head>
        <title>The Pluck Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="mt-10 mb-16 flex w-full flex-1 flex-col items-center px-6">
        <div className="mb-6 block">
          <Image src={logo} height={100} width={100} />
        </div>

        <h1 className="mb-10 text-center text-6xl font-bold uppercase">
          The pluck market
        </h1>

        <MarketplaceStore />

        <NftList />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Pluck GG
        </a>
      </footer>
    </div>
  )
}

export default Home
