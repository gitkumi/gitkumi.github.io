import Container from 'components/Container'
import styles from './index.module.scss'

export default function Footer() {
  return (
    <footer className={styles.main}>
      <Container>
        <div className={styles.text}>
          <span>Takumi © 2021.</span>
          <span>Have a good day!</span>
        </div>
      </Container>
    </footer>
  )
}