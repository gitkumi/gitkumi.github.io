import Head from 'next/head'
import Container from 'components/Container'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Link from 'next/link'

export default function ClickableDivs() {
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
            <h1>Clickable Divs</h1>
          </div>

          <div>
            <Link href="/clickable-divs/tokyo-subway-railmap">
              <a>Tokyo Subway Railmap</a>
            </Link>
          </div>

        </Container>
      </main>

      <Footer />
    </div>
  )
}