import Head from 'next/head'
import Container from 'components/Container'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Takumi Ito |> Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Container>
          <div className={styles.intro}>
            <p>Hi, I'm a Software Developer based in Japan.</p>
            <p>I specialize on front-end web development.</p>
            <p>These days I'm mostly working with React, sometimes Vue.</p>
            <p>Outside of JavaScript, I'm also interested in Elixir.</p>
            <p>Have a good day!</p>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
