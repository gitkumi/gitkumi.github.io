import Container from 'components/Container'
import styles from './index.module.scss'

export default function Footer() {
  return (
    <footer className={styles.main}>
      <Container>
        Takumi © 2021
      </Container>
    </footer>
  )
}