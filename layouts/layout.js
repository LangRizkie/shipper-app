import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/header/header.module'
import Sidebar from '../components/sidebar/sidebar.module'

export default function Layout({ children }) {
  const [sidebarState, setSidebarState] = useState(false)

  useEffect(() => {
    setSidebarState(window.innerWidth >= 768)

    window.addEventListener('resize', () =>
      window.innerWidth < 768 ?
        setSidebarState(false) : setSidebarState(true))
    
  }, [setSidebarState])

  return (
    <div className='layout'>
      <Head>
        <title>Shipper App</title>
        <meta name="description" content="Shipper App Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
      />
      <Sidebar sidebarState={sidebarState} />
      <main className='main'>
        {children}
      </main>
    </div>
  )
}