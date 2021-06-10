import Container from 'components/Container'
import styles from './index.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.main}>
      <Container>
        <h1>Takumi's Page</h1>
      </Container>
    </nav>
  )
}