import { Typography } from 'antd'
import styles from './home.module.scss'
export const HomeView = () => {
  return (
    <div className={styles.home}>
      <Typography className={styles.text}>Home</Typography>
    </div>
  )
}
