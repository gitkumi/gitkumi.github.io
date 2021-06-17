import Head from 'next/head'
import Container from 'components/Container'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import RailMap from 'components/RailMap'
import styles from './index.module.scss'

export default function TokyoSubwayRailmap() {
  return (
    <div>
      <Head>
        <title>Takumi Ito |> Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Container>
          <div>
            <h1>Tokyo Subway Railmap</h1>
          </div>

          <RailMap />
        </Container>
      </main>

      <Footer />
    </div>
  )
}