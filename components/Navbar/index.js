import Container from 'components/Container'
import styles from './index.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.main}>
      <Container>
        <a href="/">Takumi's Page</a>
      </Container>
    </nav>
  )
}