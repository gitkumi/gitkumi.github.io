import Head from 'next/head'
import Container from 'components/Container'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

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
          <div>
            Hi, I'm a Software Developer based in Japan.
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
