import Image from 'next/image'
import styles from '../styles/home.module.css'

function Header() {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_box}>
        <h5 className={styles.title}>Agile Content</h5>
        <h5 className={styles.subtitle}>Frontend test</h5>
      </div>
      <div className={styles.header_box}>
        <Image src='/dots.png' alt='dots' className={styles.avatar} width={20} height={20}/>
        <Image src='/avatar.jpg' alt='avatar' className={styles.avatar} width={30} height={30}/>
      </div>
    </div>
  )
}

export default Header