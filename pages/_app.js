import Layout from '../layouts/layout'

import '../styles/globals.css'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
