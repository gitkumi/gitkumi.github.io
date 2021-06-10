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
            Vitae alias corrupti quo veritatis similique sit rerum voluptate. Ullam voluptas sequi ea. Reprehenderit et minus. Nemo ipsa explicabo tempore ipsum sunt id illo nisi. Quisquam cum totam aut explicabo. Optio sit blanditiis ut voluptatem officia consequatur cupiditate laborum officia.
            Culpa aut molestiae saepe eum maxime velit in sint alias. Sunt et voluptatibus facere omnis est fugit. Quidem veritatis vero maxime. Et maiores eos aut ut tempora nobis ut modi in. Fuga eveniet saepe itaque ullam non rerum sint voluptatem rerum.
            Et quidem qui iure enim et corporis consequatur culpa. Iste non harum animi sed error fuga et iusto dolores. Et unde repellendus qui libero veniam ratione. Explicabo et minus. Non laborum quia eum dolor eligendi totam distinctio quis. Rerum et cum dicta tempore non.
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
