import styles from './index.module.scss'
import { mergeClassNames } from 'utils'

export default function Container({ children, className }) {
  const classes = mergeClassNames(styles.main, className)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
